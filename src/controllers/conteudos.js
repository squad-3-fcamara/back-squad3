const knex = require("../conexao");
const schemaAdicionarConteudo = require("../validations/schemaAdicionarConteudo");

const adicionarConteudo = async (req, res) => {
  try {
    await schemaAdicionarConteudo.validate(req.body);

    const cadastrarConteudo = await knex("conteudos").insert(req.body);

    if (!cadastrarConteudo) {
      return res.status(400).json("Não foi possível cadastrar o conteúdo.");
    }

    return res.status(201).json("O conteúdo foi cadastrado com sucesso!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deletarConteudo = async (req, res) => {
  const { idConteudo } = req.params;

  try {
    const conteudo = await knex("conteudos")
      .select("ordem", "nome", "tipo", "autor", "descricao", "link")
      .where("id", idConteudo)
      .first();

    if (!conteudo) {
      return res.status(400).json("Conteúdo não encontrado!");
    }

    const delConteudo = await knex("conteudos").del().where("id", idConteudo);

    if (!delConteudo) {
      return res.status(400).json("Não foi possível deletar o conteúdo.");
    }

    return res.status(200).json("O conteúdo foi deletado com sucesso!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const detalharConteudo = async (req, res) => {
  const { idConteudo } = req.params;

  try {
    const conteudo = await knex("conteudos")
      .select("ordem", "nome", "tipo", "autor", "descricao", "link")
      .where("id", idConteudo)
      .first();

    if (!conteudo) {
      return res.status(400).json("Conteúdo não encontrado!");
    }

    res.status(200).json(conteudo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const editarConteudo = async (req, res) => {
  const { idConteudo } = req.params;

  try {
    await schemaAdicionarConteudo.validate(req.body);

    const conteudo = await knex("conteudos")
      .select("ordem", "nome", "tipo", "autor", "descricao", "link")
      .where("id", idConteudo)
      .first();

    if (!conteudo) {
      return res.status(400).json("Conteúdo não encontrado!");
    }

    const conteudoAtualizado = await knex("conteudos").update(req.body).where("id", idConteudo);

    if (!conteudoAtualizado) {
      res.status(400).json("Conteúdo não foi atualizado!");
    }

    res.status(200).json("Conteúdo atualizado com sucesso!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  adicionarConteudo,
  deletarConteudo,
  detalharConteudo,
  editarConteudo,
};
