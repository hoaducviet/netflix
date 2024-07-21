require("dotenv").config();
const express = require("express");
const fs = require("fs");

const videoFileMap = {
  avenger: "./videos/avenger.mp4",
  spider: "./videos/spider.mp4",
  cdn: "./videos/cdn.mp4",
};

const app = express();
app.get("/videos/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = videoFileMap[filename];

  if (!filePath) {
    return res.status(404).send("File not found");
  }

  const stat = fs.statSync(filePath);

  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = end - start + 1;

    const file = fs.createReadStream(filePath, { start, end });

    const head = {
      "Content-Range": `bytes ${start} - ${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);

    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});
console.log(process.env)

app.listen(8080),
  () => {
    console.log("Server stream is listening on post 8080");
  };
