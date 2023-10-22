const express = require("express");
require("./db");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const hostName = "localhost";
const routes = require("./routes/route");
const searchRoutes = require("./routes/searchRoutes")
//const Image = require('./models/favModel');


app.use(cors());

app.use(express.json());

app.use("/", routes);
app.use("/", searchRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
