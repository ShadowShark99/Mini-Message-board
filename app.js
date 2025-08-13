const express = require("express");
const indexRouter = require("./routers/indexRouter");
const path = require("path");
const newRouter = require("./routers/newRouter");
const app = express();

//to allow extraction from post requests
app.use(express.urlencoded({ extended: true }));

//set views

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//call middleware
app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My second express app - listning on PORT: ${PORT}`);
});
