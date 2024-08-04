require("dotenv").config();
const express = require("express");
const route = require("./routes");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const app = express();

route(app);

app.listen(8080),
  () => {
    console.log("Server stream is listening on post 8080");
  };
