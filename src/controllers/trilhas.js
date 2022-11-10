const knex = require("../conexao");
const cadastrarTrilha = require("../utils/cadastrarTrilha");
const verificarTrilha = require("../validations/verificarTrilha");

const listarTrilhas = async (req, res) => {
  try {
    const trilhas = await knex("trilhas").select("*");
    res.status(200).json(trilhas);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const alterarTrilhas = async (req, res) => {
  const usuario = req.usuario;
  const { trilhas } = req.body;

  try {
    const erroTrilha = await verificarTrilha(trilhas);
    if (erroTrilha) {
      return res.status(400).json(erroTrilha);
    }

    await knex("inscricoes").del().where("id_usuario", usuario.id);
    for (let trilha of trilhas) {
      cadastrarTrilha(trilha, usuario.id);
    }

    res.status(200).json("Trilhas do usuário alteradas");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const detalharTrilha = async (req, res) => {
  const { id } = req.params;

  try {
    const trilha = await knex("trilhas").select("*").where("id", id).first();
    const modulos = await knex("modulos").select("id", "ordem", "nome").where("id_trilha", id);

    res.status(200).json({
      trilha,
      modulos,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const detalharModulos = async (req, res) => {
  const { idModulo } = req.params;

  try {
    const aulasDoModulo = await knex("aulas")
      .select("id", "ordem", "nome")
      .where("id_modulo", idModulo);

    if (aulasDoModulo.length === 0) {
      return res.status(404).json("Não há aulas nesse módulo");
    }

    res.status(200).json(aulasDoModulo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const detalharAulas = async (req, res) => {
  const { idTrilha, idAula } = req.params;

  try {
    const nomeTrilha = await knex("trilhas").select("nome").where("id", idTrilha).first();
    const nomeAula = await knex("aulas").select("nome").where("id", idAula).first();

    const conteudosDaAula = await knex("conteudos")
      .select("id", "ordem", "nome", "tipo", "autor", "descricao", "link")
      .where("id_aula", idAula);

    if (conteudosDaAula.length === 0) {
      return res.status(404).json("Não há contéudos nessa aula");
    }

    res.status(200).json({
      nomeTrilha,
      nomeAula,
      conteudosDaAula,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  listarTrilhas,
  alterarTrilhas,
  detalharTrilha,
  detalharModulos,
  detalharAulas,
};
