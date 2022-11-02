const express = require("express");
const { getUsers } = require("./controllers/users");
const routes = express();

routes.get("/users", getUsers);

module.exports = routes;
