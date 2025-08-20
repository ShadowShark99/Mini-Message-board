const { Router } = require("express");
const path = require("path");
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

//call middleware
indexRouter.get("/", indexController.messagesGet);
indexRouter.post("/message", indexController.messagesPost);

module.exports = indexRouter;
