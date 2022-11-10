const express = require("express");
const {
  listarTrilhas,
  alterarTrilhas,
  detalharTrilha,
  detalharModulos,
  detalharAulas,
} = require("./controllers/trilhas");
const { cadastrarUsuario, logarUsuario, detalhesUsuario } = require("./controllers/usuario");
const verificarUsuarioInscrito = require("./middlewares/verificarUsuarioInscrito");
const verificarUsuarioLogado = require("./middlewares/verificarUsuarioLogado");

const routes = express();

routes.post("/usuario/cadastro", cadastrarUsuario);
routes.post("/usuario/login", logarUsuario);
routes.get("/trilhas", listarTrilhas);

routes.use(verificarUsuarioLogado);
routes.get("/usuario", detalhesUsuario);
routes.post("/usuario/trilhas/alterar", alterarTrilhas);
routes.get("/trilhas/:idTrilha", verificarUsuarioInscrito, detalharTrilha);
routes.get("/trilhas/:idTrilha/modulos/:idModulo", verificarUsuarioInscrito, detalharModulos);
routes.get("/trilhas/:idTrilha/aulas/:idAula", verificarUsuarioInscrito, detalharAulas);

module.exports = routes;
