const yup = require("./config");

const schemaCadastroUsuario = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(8).required(),
});

module.exports = schemaCadastroUsuario;
