const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

const data = {
  id: "spider",
  title: "Avengers Infinity War",
  detail:
    "This is detail of fiml Avengers Infinity War This is detail of fiml Avengers Infinity War This is detail of fiml Avengers Infinity War This is detail of fiml Avengers Infinity War",
  image: "avengers",
  video: "alien",
  author: "viethoaduc",
};

class MediaController {
  getMediabyId(req, res) {
    const id = req.params.id;
    console.log("Theo id of media");
    res.send(data);
  }
}
module.exports = new MediaController();
