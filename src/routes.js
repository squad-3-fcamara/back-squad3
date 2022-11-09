const express = require("express");
const { listarTrilhas, alterarTrilhas } = require("./controllers/trilhas");
const { cadastrarUsuario, logarUsuario, detalhesUsuario } = require("./controllers/usuario");
const verificarUsuarioLogado = require("./middlewares/verificarUsuarioLogado");

const routes = express();

routes.post("/usuario/cadastro", cadastrarUsuario);
routes.post("/usuario/login", logarUsuario);
routes.get("/trilhas", listarTrilhas);

routes.use(verificarUsuarioLogado);
routes.get("/usuario", detalhesUsuario);
routes.post("/usuario/trilhas/alterar", alterarTrilhas);

module.exports = routes;
