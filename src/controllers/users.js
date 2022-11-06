const knex = require("../connection");

const getUsers = async (req, res) => {
  try {
    const users = await knex("usuarios").select("*");

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getUsers,
};
