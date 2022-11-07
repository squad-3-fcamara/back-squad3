const jwt = require("jsonwebtoken");
const knex = require("../conexao");
const segredo = require("../segredo/jwtSegredo");

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json("Não autorizado");
    }

    const token = authorization.replace("Bearer ", "").trim();

    const { id } = jwt.verify(token, segredo);

    const usuario = await knex("usuarios").select("*").where({ id }).first();

    if (!usuario) {
      return res.status(404).json("Usuário não encontrado");
    }

    const { senha, ...dadosUsuario } = usuario;

    req.usuario = dadosUsuario;

    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = verificarUsuarioLogado;
