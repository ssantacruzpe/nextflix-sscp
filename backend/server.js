const express = require("express");
require("./db");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const hostName = "localhost";
const searchRoutes = require("./routes/searchRoutes")

app.use(cors());

app.use(express.json());

// app.use("/", searchRoutes);
app.use("/", searchRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
