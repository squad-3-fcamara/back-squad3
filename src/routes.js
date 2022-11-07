const express = require("express");
const { cadastrarUsuario } = require("./controllers/usuario");
const routes = express();

routes.post("/usuario/cadastro", cadastrarUsuario);

module.exports = routes;
