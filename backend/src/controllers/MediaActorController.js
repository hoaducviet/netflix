const MediaActor = require("../models/MediaActor");
const Media = require("../models/Media");
const Actor = require("../models/Actor");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class MediaActorController {
  //Get All MediaActor
  async getMediaActorAllbyIdMedia(req, res) {
    try {
      const idMedia = req.params.idmedia;

      //Tìm thông tin MediaActor
      const results = await MediaActor.find({ idMedia: idMedia });
      if (!results.length) {
        return res.status(404).json({ message: "MediaActor is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error MediaActor:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Post One Actor by Media
  async insertOneMediaActor(req, res) {
    try {
      const { idActor, idMedia } = req.body;

      if (!idActor || !idMedia) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const existingMediaActor = await MediaActor.findOne({
        idActor: idActor,
        idMedia: idMedia,
      });
      if (existingMediaActor) {
        return res.status(409).json({ message: "MediaActor already exists" });
      }

      const newMediaActor = new MediaActor({
        idActor: idActor,
        idMedia: idMedia,
      });

      const result = await newMediaActor.save();
      return res.status(201).json({
        message: "MediaActor added successfully",
        mediaactor: mongooseToObject(result),
      });
    } catch (error) {
      console.error("Error insert MediaActor:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // POST Many Actor by One Media
  async insertManyMediaActor(req, res) {
    try {
      const idMedia = req.body.idmedia;
      const actorData = req.body.data;

      if (!idMedia) {
        return res.status(400).json({
          message: "Missing required fields ID Media",
        });
      }

      if (!Array.isArray(actorData)) {
        return res.status(400).json({
          message:
            "Invalid data format. Expected an array of MediaActors objects.",
        });
      }

      const existingMedia = await Media.findById(idMedia);
      if (!existingMedia) {
        return res.status(400).json({ message: "Media not found" });
      }

      const validMedia = [];
      const errors = [];

      for (let actor of actorData) {
        if (!actor.idActor) {
          errors.push({ actor, error: "Missing required fields" });
          continue;
        }

        const existingActor = await Actor.findById(actor.idActor);
        if (!existingActor) {
          errors.push({ actor, error: "Actor not exist" });
          continue;
        }

        // Kiểm tra tồn tại của MediaActor chưa
        let existingMediaActor = await MediaActor.findOne({
          idActor: actor.idActor,
          idMedia: idMedia,
        });
        if (existingMediaActor) {
          errors.push({
            actor,
            error: "MediaActor with this actor of Media already exists",
          });
          continue;
        }

        validMedia.push(actor);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some MediaActor items could not be added",
          errors,
        });
      }

      const insertData = validMedia.map((item) => ({
        idMedia: idMedia,
        ...item,
      }));
      const results = await MediaActor.insertMany(insertData);
      return res.status(201).json({
        message: "MediaActor data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error MediaActor:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new MediaActorController();
