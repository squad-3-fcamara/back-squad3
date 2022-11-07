const yup = require("./config");

const schemaLogarUsuario = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().min(8).required(),
});

module.exports = schemaLogarUsuario;
