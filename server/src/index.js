// NODE MODULE IMPORTS
const http = require("http");

// CUSTOM FUNCTION IMPORTS
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

async function startServer () {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log("***********************************************************");
    console.log(`**************    Server listening on ${PORT}     ************`);
    console.log("***********************************************************");
  });
}

startServer();
