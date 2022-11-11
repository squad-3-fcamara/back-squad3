const yup = require("./config");

const schemaAdicionarConteudo = yup.object().shape({
  id_aula: yup.number(),
  ordem: yup.string().required(),
  nome: yup.string(),
  tipo: yup.string().required(),
  autor: yup.string().required(),
  descricao: yup.string().required(),
  link: yup.string().required(),
});

module.exports = schemaAdicionarConteudo;
