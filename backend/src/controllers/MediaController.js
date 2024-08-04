const Media = require("../models/Media");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class MediaController {
  //Get All Media
  async getMediaAll(req, res) {
    try {
      const results = await Media.find();

      if (!results.length) {
        res.status(404).json({ message: "Media not found" });
      }

      return res.status(200).json({data: mutipleMongooseToObject(results)});
    } catch (error) {
      console.error("Error retrieving media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Get Media By Id
  async getMediabyId(req, res) {
    try {
      const id = req.params.id;
      const result = await Media.findById(id);

      if (!result) {
        res.status(404).json({ message: "Media not found" });
      }

      return res.status(200).json({ data: mongooseToObject(result) });
    } catch (error) {
      console.error("Error retrieving media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // Post Many Media
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

      const results = await Media.insertMany(validMedia);
      return res.status(201).json({
        message: "Media data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error insert media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Post One Media
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
      return res.status(201).json({
        message: "Media added successfully",
        media: newMedia,
      });
    } catch (error) {
      console.error("Error insert media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Edit Media
  async editMedia(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;

      const result = await Media.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });

      if (!result) {
        return res.status(404).json({ message: "Media not found" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error edit media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Delete Media
  async deleteMedia(req, res) {
    try {
      const id = req.params.id;
      const result = await Media.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).json({ message: "Media not found" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error edit media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new MediaController();
