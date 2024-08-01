const Language = require("../models/Language");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class LanguageController {
  //Get Language By Id
  async getLanguagebyId(req, res) {
    try {
      const id = req.params.id;

      //Tìm thông tin Language
      const result = await Language.findById(id);
      if (!result) {
        return res.status(404).json({ message: "Language is null" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error language:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Get All Language
  async getLanguageAll(req, res) {
    try {
      //Tìm thông tin Language
      const results = await Language.find();
      if (!results.length) {
        return res.status(404).json({ message: "Language is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error language:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //POST Insert One Notification
  async insertOneLanguage(req, res) {
    try {
      const { name, symbol } = req.body;

      //Kiểm tra dữ liệu đầu vào
      if (!name || !symbol) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // kiểm tra tồn tại của Language chưa
      const existingLanguage = await Language.findOne({ name: name });
      if (existingLanguage) {
        return res.status(409).json({ message: "Language already exists" });
      }

      const newLanguage = new Language(req.body);
      const result = await newLanguage.save();
      return res.status(201).json({
        message: "Language added successfully",
        language: mongooseToObject(result),
      });
    } catch (error) {
      console.error("Error language:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // POST Many Language
  async insertManyLanguage(req, res) {
    try {
      const languageData = req.body;

      if (!Array.isArray(languageData)) {
        return res.status(400).json({
          message:
            "Invalid data format. Expected an array of languages objects.",
        });
      }

      const validMedia = [];
      const errors = [];

      for (let language of languageData) {
        if (!language.name || !language.symbol) {
          errors.push({ language, error: "Missing required fields" });
          continue;
        }

        // kiểm tra tồn tại của Language chưa
        let existingLanguage = await Language.findOne({ name: language.name });
        if (existingLanguage) {
          errors.push({
            language,
            error: "Language with this name already exists",
          });
          continue;
        }

        validMedia.push(language);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some language items could not be added",
          errors,
        });
      }

      const results = await Language.insertMany(validMedia);
      return res.status(201).json({
        message: "Language data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error language:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new LanguageController();
