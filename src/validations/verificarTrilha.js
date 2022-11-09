const knex = require("../conexao");

async function verificarTrilha(trilhas) {
  if (!trilhas) {
    return "Você deve informar a trilha.";
  }

  const trilhasBanco = await knex("trilhas").select("*");
  if (trilhas.length > trilhasBanco.length) {
    return "Você está informando mais trilhas que o permitido.";
  }
}

module.exports = verificarTrilha;
