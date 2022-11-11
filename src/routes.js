const express = require("express");

const {
  adicionarConteudo,
  deletarConteudo,
  detalharConteudo,
  editarConteudo,
} = require("./controllers/conteudos");
const {
  listarTrilhas,
  alterarTrilhas,
  detalharTrilha,
  detalharModulos,
  detalharAulas,
} = require("./controllers/trilhas");
const { cadastrarUsuario, logarUsuario, detalhesUsuario } = require("./controllers/usuario");

const verificarAdmin = require("./middlewares/verificarAdmin");
const verificarUsuarioInscrito = require("./middlewares/verificarUsuarioInscrito");
const verificarUsuarioLogado = require("./middlewares/verificarUsuarioLogado");

const routes = express();

routes.post("/usuario/cadastro", cadastrarUsuario);
routes.post("/usuario/login", logarUsuario);
routes.get("/trilhas", listarTrilhas);

routes.use(verificarUsuarioLogado);
routes.get("/usuario", detalhesUsuario);
routes.patch("/usuario/trilhas", alterarTrilhas);
routes.get("/trilhas/:idTrilha", verificarUsuarioInscrito, detalharTrilha);
routes.get("/trilhas/:idTrilha/modulos/:idModulo", verificarUsuarioInscrito, detalharModulos);
routes.get("/trilhas/:idTrilha/aulas/:idAula", verificarUsuarioInscrito, detalharAulas);

routes.use(verificarAdmin);
routes.post("/conteudos", adicionarConteudo);
routes.delete("/conteudos/:idConteudo", deletarConteudo);
routes.get("/conteudo/:idConteudo", detalharConteudo);
routes.patch("/conteudo/:idConteudo", editarConteudo);
module.exports = routes;
