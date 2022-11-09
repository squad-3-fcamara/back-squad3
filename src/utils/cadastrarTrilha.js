const knex = require("../conexao");
async function cadastrarTrilha(id_trilha, id_usuario) {
  await knex("inscricoes").insert({ id_trilha, id_usuario });
}

module.exports = cadastrarTrilha;
