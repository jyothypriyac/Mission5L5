const express = require("express");
const trademeRouter = express.Router();

const trademeController = require("../Controllers/trademeController");

trademeRouter.get("/api/trademe/:title", trademeController.searchByCriteria);

module.exports = trademeRouter;
