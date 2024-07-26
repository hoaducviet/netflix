require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const TelegramBot = require("node-telegram-bot-api");

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

// https://api.telegram.org/bot7322701731:AAFZbtOgKDL-a6WzsBXXmCozGXAkil5hWM4/getFile

const token = "7322701731:AAFZbtOgKDL-a6WzsBXXmCozGXAkil5hWM4";
const fileId =
  "BAACAgUAAxkBAAMIZp4RZS0ObAz2XKAH2K2SR3HMbogAAgQSAAKg5fFUyD9Bx1L6PWk1BA";

const TELEGRAM_API_URL = `https://api.telegram.org/bot${token}`;

app.get("/stream/:fileId", async (req, res) => {
  

  try {
    // Lấy thông tin tệp từ Telegram
    const fileResponse = await axios.get(`${TELEGRAM_API_URL}/getFile`, {
      params: { file_id: fileId },
    });

    console.log(fileResponse)
    
    const fileData = fileResponse.data;

    if (!fileData.ok) {
      return res.status(404).send("File not found");
    }

    const filePath = fileData.result.file_path;
    const fileUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
    const range = req.headers.range;

    if (!range) {
      return res.status(400).send("Requires Range header");
    }

    const videoResponse = await axios.head(fileUrl);
    const videoSize = videoResponse.headers["content-length"];

    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);

    const videoStream = await axios({
      url: fileUrl,
      method: "GET",
      responseType: "stream",
      headers: {
        Range: `bytes=${start}-${end}`,
      },
    });

    videoStream.data.pipe(res);
  } catch (error) {
    console.error("Error streaming video:", error);
    res.status(500).send("Error streaming video");
  }
});

// app.get("/videos/:filename", async (req, res) => {
//   const filename = req.params.filename;
//   const filePath = videoFileMap[filename];

//   if (!filePath) {
//     return res.status(404).send("File not found");
//   }

//   // if (filePath.startsWith("http")) {
//   //   // Nếu filePath là một URL, sử dụng request để lấy dữ liệu và truyền tiếp
//   //   const response = await axios({
//   //     method: 'get',
//   //     url: filePath,
//   //     responseType: 'stream'
//   //   });
//   //   response.data.pipe(res);
//   // } else {
//     const stat = fs.statSync(filePath);

//     const fileSize = stat.size;
//     const range = req.headers.range;

//     if (range) {
//       const parts = range.replace(/bytes=/, "").split("-");
//       const start = parseInt(parts[0], 10);
//       const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

//       const chunksize = end - start + 1;

//       const file = fs.createReadStream(filePath, { start, end });

//       const head = {
//         "Content-Range": `bytes ${start} - ${end}/${fileSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": chunksize,
//         "Content-Type": "video/mp4",
//       };

//       res.writeHead(206, head);

//       file.pipe(res);
//     } else {
//       const head = {
//         "Content-Length": fileSize,
//         "Content-Type": "video/mp4",
//       };
//       res.writeHead(200, head);
//       fs.createReadStream(filePath).pipe(res);
//     }
//   // }
// });

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
