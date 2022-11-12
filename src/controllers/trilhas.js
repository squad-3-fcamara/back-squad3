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
  const { idTrilha } = req.params;

  try {
    const trilha = await knex("trilhas").select("*").where("id", idTrilha).first();

    if (!trilha) {
      return res.status(404).json("Não foi encontrado trilha com esse id.");
    }

    const modulos = await knex("modulos")
      .select("id", "ordem", "nome")
      .where("id_trilha", idTrilha);

    for (let i = 0; i < modulos.length; i++) {
      const aulasDoModulo = await knex("aulas")
        .select("id", "ordem", "nome")
        .where("id_modulo", modulos[i].id);

      modulos[i].aulas = aulasDoModulo;
    }

    res.status(200).json({
      trilha,
      modulos,
    });
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
  detalharAulas,
};
