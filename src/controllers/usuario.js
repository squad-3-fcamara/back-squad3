const bcrypt = require("bcrypt");
const knex = require("../conexao");
const cadastrarTrilha = require("../utils/cadastrarTrilha");
const schemaCadastroUsuario = require("../validations/schemaCadastroUsuario");
const verificarTrilha = require("../validations/verificarTrilha");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha, trilha } = req.body;

  try {
    await schemaCadastroUsuario.validate(req.body);
    const erro = verificarTrilha(trilha);
    if (erro) {
      res.status(400).json(erro);
    }

    const verificarEmail = await knex("usuarios").where({ email }).first();
    if (verificarEmail) {
      return res.status(400).json("O email já existe");
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const dadosUsuario = { nome, email, senha: senhaCriptografada };

    const registrarUsuario = await knex("usuarios")
      .insert(dadosUsuario)
      .returning("*");

    if (!registrarUsuario) {
      return res.status(400).json("Não foi possível cadastrar usuário.");
    }

    for (let t of trilha) {
      cadastrarTrilha(t, registrarUsuario[0]);
    }

    return res.status(201).json("O usuário foi cadastrado com sucesso!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  cadastrarUsuario,
};
