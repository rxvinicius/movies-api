const express = require("express");
const app = express();
const { moviesRouter } = require("./src/api/routes");
const port = process.env.PORT || 3000;

const startServer = async () => {
  app.get("/", (req, res) => res.sendStatus(200));
  app.use("/movies", moviesRouter);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

startServer();

module.exports = app;
