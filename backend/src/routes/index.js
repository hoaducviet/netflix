const userRouter = require("./user");
const adminRouter = require("./admin");
const siteRouter = require("./site");

function route(app) {
  app.use("/user", userRouter);
  // app.use("/admin", adminRouter);
  // app.use("/", siteRouter);
}
module.exports = route;
