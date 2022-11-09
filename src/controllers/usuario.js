const bcrypt = require("bcrypt");
const knex = require("../conexao");
const jwt = require("jsonwebtoken");
const segredo = require("../segredo/jwtSegredo");
const schemaCadastroUsuario = require("../validations/schemaCadastroUsuario");
const schemaLogarUsuario = require("../validations/schemaLogarUsuario");
const verificarTrilha = require("../validations/verificarTrilha");
const cadastrarTrilha = require("../utils/cadastrarTrilha");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha, trilhas } = req.body;

  try {
    await schemaCadastroUsuario.validate(req.body);
    const erroTrilha = await verificarTrilha(trilhas);
    if (erroTrilha) {
      return res.status(400).json(erroTrilha);
    }

    const verificarEmail = await knex("usuarios").where({ email }).first();
    if (verificarEmail) {
      return res.status(400).json("O email já existe");
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const dadosUsuario = { nome, email, senha: senhaCriptografada };

    const registrarUsuario = await knex("usuarios").insert(dadosUsuario).returning("*");

    if (!registrarUsuario) {
      return res.status(400).json("Não foi possível cadastrar usuário.");
    }

    for (let trilhaId of trilhas) {
      cadastrarTrilha(trilhaId, registrarUsuario[0].id);
    }

    return res.status(201).json("O usuário foi cadastrado com sucesso!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const logarUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    await schemaLogarUsuario.validate(req.body);

    const usuario = await knex("usuarios").where({ email }).first();
    if (!usuario) {
      return res.status(404).json("O usuário não foi encontrado");
    }

    const verificarSenha = await bcrypt.compare(senha, usuario.senha);
    if (!verificarSenha) {
      return res.status(400).json("Email e/ou senha não conferem");
    }

    const token = jwt.sign({ id: usuario.id }, segredo, {
      expiresIn: "8h",
    });

    const { senha: senhaUsuario, ...dadosUsuario } = usuario;

    return res.status(200).json({
      usuario: dadosUsuario,
      token,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const detalhesUsuario = async (req, res) => {
  const usuario = req.usuario;
  const trilhas = [];

  const trilhasId = await knex("inscricoes").select("id_trilha").where("id_usuario", usuario.id);

  for (let trilhaId of trilhasId) {
    const trilha = await knex("trilhas").select("*").where("id", trilhaId.id_trilha).first();
    trilhas.push(trilha);
  }
  res.status(200).json({
    usuario,
    trilhas,
  });
};

module.exports = {
  cadastrarUsuario,
  logarUsuario,
  detalhesUsuario,
};
