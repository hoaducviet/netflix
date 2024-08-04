const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const posterFileMap = require("../filemap/posterFileMap");

router.get("/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = posterFileMap[filename];

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

module.exports = router;
