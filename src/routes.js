const express = require("express");
const { cadastrarUsuario, logarUsuario } = require("./controllers/usuario");
const verificarUsuarioLogado = require("./middlewares/verificarUsuarioLogado");

const routes = express();

routes.post("/usuario/cadastro", cadastrarUsuario);
routes.post("/usuario/login", logarUsuario);

routes.use(verificarUsuarioLogado);

module.exports = routes;
