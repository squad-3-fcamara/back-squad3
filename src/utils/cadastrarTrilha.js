const knex = require("../conexao");

async function cadastrarTrilha(trilha, usuario) {
  const { id } = await knex("trilhas").select("id").whereILike("nome", `%${trilha}%`).first();
  await knex("inscricoes").insert({ id_trilha: id, id_usuario: usuario.id });
}

module.exports = cadastrarTrilha;
