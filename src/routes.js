const express = require("express");
const { cadastrarUsuario, logarUsuario } = require("./controllers/usuario");
const routes = express();

routes.post("/usuario/cadastro", cadastrarUsuario);
routes.post("/usuario/login", logarUsuario);

module.exports = routes;
