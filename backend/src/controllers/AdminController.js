const Account = require("../../models/Account");
const Media = require("../../models/Media");
const MyList = require("../../models/MyList");
const Language = require("../../models/Language");
const Notification = require("../../models/Notification");
const User = require("../../models/User");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

class AdminController {
  async insertManyMedia(req, res) {
    try {
      const mediaData = req.body;

      if (!Array.isArray(mediaData)) {
        return res.status(400).json({
          message: "Invalid data format. Expected an array of media objects.",
        });
      }

      const validMedia = [];
      const errors = [];

      for (let media of mediaData) {
        if (
          !media.title ||
          !media.detail ||
          !media.videoURL ||
          !media.imageURL ||
          !media.trailerURL
        ) {
          errors.push({ media, error: "Missing required fields" });
          continue;
        }

        let existingMedia = await Media.findOne({ title: media.title });
        if (existingMedia) {
          errors.push({ media, error: "Media with this title already exists" });
          continue;
        }
        validMedia.push(media);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some media items could not be added",
          errors,
        });
      }

      const result = await Media.insertMany(validMedia);
      res.status(201).json({
        message: "Media data added successfully",
        data: result,
      });
    } catch (error) {
      console.error("Error insert media:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async insertOneMedia(req, res) {
    try {
      const { title, detail, label, videoURL, trailerURL, imageURL } = req.body;

      if (!title || !detail || !videoURL || !trailerURL || !imageURL) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const existingMedia = await Media.findOne({ title: title });
      if (existingMedia) {
        return res.status(409).json({ message: "Media already exists" });
      }

      const newMedia = new Media({
        title: title,
        detail: detail,
        label: label,
        videoURL: videoURL,
        trailerURL: trailerURL,
        imageURL: imageURL,
      });

      await newMedia.save();
      res.status(201).json({
        message: "Media added successfully",
        media: newMedia,
      });
    } catch (error) {
      console.error("Error insert media:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new AdminController();
