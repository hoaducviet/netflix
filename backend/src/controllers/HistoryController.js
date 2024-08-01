const History = require("../models/History");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class HistoryController {
  //Get All History
  async getHistoryAllbyIdUser(req, res) {
    try {
      const idUser = req.params.iduser;

      //Tìm thông tin History
      const results = await History.find({ idUser: idUser });
      if (!results.length) {
        return res.status(404).json({ message: "History is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error History:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Post One Media
  async insertOneHistory(req, res) {
    try {
      const { idUser, idMedia } = req.body;

      if (!idUser || !idMedia) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const existingHistory = await History.findOne({
        idUser: idUser,
        idMedia: idMedia,
      });
      if (existingHistory) {
        return res.status(409).json({ message: "History already exists" });
      }

      const newHistory = new History({
        idUser: idUser,
        idMedia: idMedia,
      });

      const result = await newHistory.save();
      return res.status(201).json({
        message: "History added successfully",
        history: mongooseToObject(result),
      });
    } catch (error) {
      console.error("Error insert history:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // POST Many History
  async insertManyHistory(req, res) {
    try {
      const historyData = req.body;

      if (!Array.isArray(historyData)) {
        return res.status(400).json({
          message:
            "Invalid data format. Expected an array of historys objects.",
        });
      }

      const validMedia = [];
      const errors = [];

      for (let history of historyData) {
        if (!history.idUser || !history.idMedia) {
          errors.push({ history, error: "Missing required fields" });
          continue;
        }

        // Kiểm tra tồn tại của History chưa
        let existingHistory = await History.findOne({
          idUser: history.idUser,
          idMedia: history.idMedia,
        });
        if (existingHistory) {
          errors.push({
            history,
            error: "History with this name of Media already exists",
          });
          continue;
        }

        validMedia.push(history);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some history items could not be added",
          errors,
        });
      }

      const results = await History.insertMany(validMedia);
      return res.status(201).json({
        message: "History data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error history:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new HistoryController();
