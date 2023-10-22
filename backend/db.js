const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

main()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGODB_URI);
}
