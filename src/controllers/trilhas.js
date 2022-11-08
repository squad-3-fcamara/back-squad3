const knex = require("../conexao");

const listarTrilhas = async (req, res) => {
  const trilhas = await knex("trilhas").select("*");
  res.status(200).json(trilhas);
};

module.exports = {
  listarTrilhas,
};
