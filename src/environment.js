require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const PORT = process.env.PORT || 3000;

module.exports = { PORT };
