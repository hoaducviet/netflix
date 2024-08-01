const Country = require("../models/Country");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class CountryController {
  //Get Country By Id
  async getCountrybyId(req, res) {
    try {
      const id = req.params.id;

      //Tìm thông tin Country
      const result = await Country.findById(id);
      if (!result) {
        return res.status(404).json({ message: "Country not found" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error country:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Get All Country
  async getCountryAll(req, res) {
    try {
      console.log("This is all country");
      //Tìm thông tin Country
      const results = await Country.find();
      if (!results.length) {
        return res.status(404).json({ message: "Country is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error country:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // POST Many Country
  async insertManyCountry(req, res) {
    try {
      const countryData = req.body;

      if (!Array.isArray(countryData)) {
        return res.status(400).json({
          message: "Invalid data format. Expected an array of actors objects.",
        });
      }

      const validMedia = [];
      const errors = [];

      for (let country of countryData) {
        if (!country.name) {
          errors.push({ country, error: "Missing required fields" });
          continue;
        }

        // Kiểm tra tồn tại của country chưa
        let existingCountry = await Country.findOne({ name: country.name });
        if (existingCountry) {
          errors.push({
            country,
            error: "Country with this name already exists",
          });
          continue;
        }

        validMedia.push(country);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some country items could not be added",
          errors,
        });
      }

      const results = await Country.insertMany(validMedia);
      return res.status(201).json({
        message: "Country data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error Country:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new CountryController();
