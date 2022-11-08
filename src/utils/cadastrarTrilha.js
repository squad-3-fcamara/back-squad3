const knex = require("../conexao");

async function cadastrarTrilha(trilha, usuario) {
  let id_trilha = 0;
  switch (trilha) {
    case "fullstack":
      id_trilha = 1;
      break;
    case "ux":
      id_trilha = 2;
      break;
    case "qa":
      id_trilha = 3;
      break;
  }
  await knex("inscricoes").insert({ id_trilha, id_usuario: usuario.id });
}

module.exports = cadastrarTrilha;
