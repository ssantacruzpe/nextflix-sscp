const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/route");

app.use(cors());

app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
