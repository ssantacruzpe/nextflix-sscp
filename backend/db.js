const mongoose = require("mongoose");

require("dotenv").config();

main()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.URI);
}

module.exports = main;
