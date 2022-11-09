const knex = require("../conexao");
const cadastrarTrilha = require("../utils/cadastrarTrilha");
const verificarTrilha = require("../validations/verificarTrilha");

const listarTrilhas = async (req, res) => {
  const trilhas = await knex("trilhas").select("*");
  res.status(200).json(trilhas);
};

const alterarTrilhas = async (req, res) => {
  const usuario = req.usuario;
  const { trilhas } = req.body;

  const erroTrilha = await verificarTrilha(trilhas);
  if (erroTrilha) {
    return res.status(400).json(erroTrilha);
  }

  await knex("inscricoes").del().where("id_usuario", usuario.id);
  for (let trilha of trilhas) {
    cadastrarTrilha(trilha, usuario.id);
  }

  res.status(200).json("Trilhas do usuário alteradas");
};

module.exports = {
  listarTrilhas,
  alterarTrilhas,
};
