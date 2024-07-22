require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const videoFileMap = {
  avenger: "./videos/avenger.mp4",
  spider: "./videos/spider.mp4",
  cdn: "https://www.youtube.com/watch?v=vDfkqjhtiCM&list=RDFSSsU-fOluY&index=27",
};

const imageFileMap = {
  logo: "./images/logo.png",
  intro: "./images/intro.gif",
  1: "./images/1.png",
};

const app = express();
app.get("/videos/:filename", async (req, res) => {
  const filename = req.params.filename;
  const filePath = videoFileMap[filename];

  if (!filePath) {
    return res.status(404).send("File not found");
  }

  // if (filePath.startsWith("http")) {
  //   // Nếu filePath là một URL, sử dụng request để lấy dữ liệu và truyền tiếp
  //   const response = await axios({
  //     method: 'get',
  //     url: filePath,
  //     responseType: 'stream'
  //   });
  //   response.data.pipe(res);
  // } else {
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
  // }
});

app.get("/images/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = imageFileMap[filename];

  if (!filePath) {
    return res.status(404).send("File not found");
  }

  const ext = path.extname(filePath).toLowerCase();
  let contentType = "image/jpeg"; // Mặc định loại hình ảnh là jpeg

  if (ext === ".png") {
    contentType = "image/png";
  } else if (ext === ".jpg" || ext === ".jpeg") {
    contentType = "image/jpeg";
  }

  const head = {
    "Content-Type": contentType,
  };

  res.writeHead(200, head);
  fs.createReadStream(filePath).pipe(res);
});

app.listen(8080),
  () => {
    console.log("Server stream is listening on post 8080");
  };
