const Account = require('../../models/Account');
const Media = require('../../models/Media');
const MyList = require('../../models/MyList');
const Language = require('../../models/Language');
const Notification = require('../../models/Notification');
const User = require('../../models/User');

const { mutipleMongooseToObject, mongooseToObject} = require("../../utils/mongoose");

const data = [
  {
    id: 1,
    title: "Avengers Infinity War",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",
    videoURL: "/media/AvengersInfinityWar.mp4",
    imageURL:
      "https://www.usatoday.com/gcdn/presto/2022/10/14/USAT/89e7eee0-28ac-403f-acfb-a3bd74a01790-avengers-infinity-war-1200-1200-675-675-crop-000000.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
  },
];

class HomeController {
  getNewonNetflix(req, res) {
    res.send(data);
  }
}
module.exports = new HomeController();
