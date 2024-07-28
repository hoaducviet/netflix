const {
    mutipleMongooseToObject,
    mongooseToObject,
  } = require("../../utils/mongoose");
  
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
    {
      id: 2,
      title: "Spider Man 2",
      detail: "This is detail of fiml Avengers Infinity War",
      label: "18+",
  
      videoURL: "/media/SpiderMan2.mp4",
      imageURL:
        "https://images.moviesanywhere.com/980ffe0de224551b0dd5db82d98ac700/112b14f0-2f94-4dab-a684-aeba4d6b3463.jpg?w=2560&r=16x9",
    },
  ];
  
  class MyListController {
    getMyListAll(req, res) {
      res.send(data);
    }
  }
  module.exports = new MyListController();
  