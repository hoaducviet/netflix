const { mongo } = require("mongoose");
const Media = require("../models/Media");
const MyList = require("../models/MyList");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class MyListController {
  //Get All MyList by ID
  async getMyListbyIdUser(req, res) {
    try {
      const idUser = req.params.iduser;

      if (!idUser) {
        return res.status(400).json({ message: "Id user is required" });
      }

      const list = await MyList.find({ idUser: idUser });
      if (!list.length) {
        return res.status(400).json({ message: "List is null" });
      }

      const results = [];
      for (let item of list) {
        if (item.idMedia) {
          const result = await Media.findById(item.idMedia);
          if (result) {
            results.push(result);
          }
        }
      }

      return res.status(200).json({ data: mutipleMongooseToObject(results) });
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
  // Post Many MyList
  async insertManyMyList(req, res) {
    try {
      const mylistData = req.body;

      if (!Array.isArray(mylistData)) {
        return res.status(400).json({
          message: "Invalid data format. Expected an array of User objects.",
        });
      }

      const validMyList = [];
      const errors = [];

      for (let mylist of mylistData) {
        if (!mylist.idUser || !mylist.idMedia) {
          errors.push({ mylist, error: "Missing required fields" });
          continue;
        }

        let existingMyList = await MyList.findOne({
          idUser: mylist.idUser,
          idMedia: mylist.idMedia,
        });
        if (existingMyList) {
          errors.push({
            mylist,
            error: "MyList with this title already exists",
          });
          continue;
        }
        validMyList.push(mylist);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some MyList items could not be added",
          errors,
        });
      }

      const results = await MyList.insertMany(validMyList);
      return res.status(201).json({
        message: "MyList data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error insert User:", error.message);
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
