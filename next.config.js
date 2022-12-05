require("dotenv").config();

module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL: process.env.MONGODB_URL,
    ACCESS_TOKEN_SECRET:
  },
};
