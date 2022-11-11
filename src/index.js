require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes");
const cors = require("cors");
const swaggerDocs = require("./swagger.json");
const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3100);
