const express = require("express");
const helmet = require("helmet");

const projects = require("./projects");
const actions = require("./actions");

const server = express();
server.use(express.json());
server.use(helmet());

server.use("/projects", projects);
server.use("/actions", actions);

server.listen(5000, () => {
    console.log("Listening on port 5000");
})
