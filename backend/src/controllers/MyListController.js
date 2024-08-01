const { mongo } = require("mongoose");
const Media = require("../models/Media");
const MyList = require("../models/MyList");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class MyListController {
  //Get All MyList
  async getMyListAll(req, res) {
    try {
      const results = await MyList.find();

      if (!results.length) {
        return res.status(404).json({ message: "Media not found" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error retrieving media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Post One MyList
  async insertOneMyList(req, res) {
    try {
      const { idMedia, idUser } = req.body;

      if (!idMedia || !idUser) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const existingMedia = await MyList.findOne({
        idUser: idUser,
        idMedia: idMedia,
      });
      if (existingMedia) {
        return res.status(409).json({ message: "Media is exists in my list" });
      }

      const newMyList = new MyList({
        idUser: idUser,
        idMedia: idMedia,
      });

      await newMyList.save();
      return res.status(201).json({
        message: "Media added successfully",
      });
    } catch (error) {
      console.error("Error insert media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Delete One MyList
  async deleteOneMyList(req, res) {
    try {
      const idUser = req.query.u;
      const idMedia = req.query.m;

      const media = await MyList.findOne({ idUser: idUser, idMedia: idMedia });

      if (!media) {
        return res.status(404).json({ message: "The media not found" });
      }

      const result = await MyList.deleteOne({
        idUser: idUser,
        idMedia: idMedia,
      });

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error edit media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new MyListController();
