const avatarRouter = require("./avatars");
const imageRouter = require("./images");
const videoRouter = require("./videos");
const posterRouter = require("./posters");

function route(app) {
  app.use("/avatars", avatarRouter);
  app.use("/images", imageRouter);
  app.use("/videos", videoRouter);
  app.use("/posters", posterRouter);
}
module.exports = route;
