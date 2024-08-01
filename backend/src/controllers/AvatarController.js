const Avatar = require("../models/Avatar");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class AvatarController {
  //Get Avatar By Id
  async getAvatarbyId(req, res) {
    try {
      const id = req.params.id;

      //Tìm thông tin Avatar
      const result = await Avatar.findById(id);
      if (!result) {
        return res.status(404).json({ message: "Avatar is null" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error avatar:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Get All Avatar
  async getAvatarAll(req, res) {
    try {
      //Tìm thông tin Avatar
      const results = await Avatar.find();
      if (!results.length) {
        return res.status(404).json({ message: "Avatar is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error avatar:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // POST Many Avatar
  async insertManyAvatar(req, res) {
    try {
      const avatarData = req.body;

      if (!Array.isArray(avatarData)) {
        return res.status(400).json({
          message: "Invalid data format. Expected an array of Avatars objects.",
        });
      }

      const validMedia = [];
      const errors = [];

      for (let avatar of avatarData) {
        if (!avatar.name) {
          errors.push({ Avatar, error: "Missing required fields" });
          continue;
        }

        // Kiểm tra tồn tại của Avatar chưa
        let existingAvatar = await Avatar.findOne({
          name: avatar.name,
          idMedia: avatar.idMedia,
        });
        if (existingAvatar) {
          errors.push({
            avatar,
            error: "Avatar with this name of Media already exists",
          });
          continue;
        }

        validMedia.push(avatar);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some avatar items could not be added",
          errors,
        });
      }

      const results = await Avatar.insertMany(validMedia);
      return res.status(201).json({
        message: "Avatar data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error avatar:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new AvatarController();
