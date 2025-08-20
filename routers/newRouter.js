const { Router } = require("express");
const path = require("path");
const newRouter = Router();
const newController = require("../controllers/newController.js");

//call middleware
newRouter.get("/", newController.newGet);
newRouter.post("/", newController.newPost);

module.exports = newRouter;
