const knex = require("../conexao");

const verificarUsuarioInscrito = async (req, res, next) => {
  const usuario = req.usuario;
  const { idTrilha } = req.params;
  try {
    const verificarUsuario = await knex("inscricoes")
      .select("*")
      .where({ id_trilha: idTrilha, id_usuario: usuario.id })
      .first();
    if (!verificarUsuario) {
      return res.status(401).json("Este usuário não está inscrito nessa trilha");
    }
    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = verificarUsuarioInscrito;
