const Genre = require("../models/Genre");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class GenreController {
  //Get Genre By Id
  async getGenrebyId(req, res) {
    try {
      const id = req.params.id;

      //Tìm thông tin Genre
      const result = await Genre.findById(id);
      if (!result) {
        return res.status(404).json({ message: "Genre is null" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error genre:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Get All Genre
  async getGenreAll(req, res) {
    try {
      //Tìm thông tin Genre
      const results = await Genre.find();
      if (!results.length) {
        return res.status(404).json({ message: "Genre is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error language:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //POST Insert One Genre
  async insertOneGenre(req, res) {
    try {
      const { name } = req.body;

      //Kiểm tra dữ liệu đầu vào
      if (!name) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Kiểm tra tồn tại của Genre chưa
      const existingGenre = await Genre.findOne({ name: name });
      if (existingGenre) {
        return res.status(409).json({ message: "Genre already exists" });
      }

      const newGenre = new Genre(req.body);
      const result = await newGenre.save();
      return res.status(201).json({
        message: "Language added successfully",
        genre: mongooseToObject(result),
      });
    } catch (error) {
      console.error("Error genre:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // POST Many Genre
  async insertManyGenre(req, res) {
    try {
      const genreData = req.body;

      if (!Array.isArray(genreData)) {
        return res.status(400).json({
          message: "Invalid data format. Expected an array of genres objects.",
        });
      }

      const validMedia = [];
      const errors = [];

      for (let genre of genreData) {
        if (!genre.name) {
          errors.push({ genre, error: "Missing required fields" });
          continue;
        }

        // Kiểm tra tồn tại của Language chưa
        let existingGenre = await Genre.findOne({ name: genre.name });
        if (existingGenre) {
          errors.push({
            genre,
            error: " Genre with this name already exists",
          });
          continue;
        }

        validMedia.push(genre);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some genre items could not be added",
          errors,
        });
      }

      const results = await Genre.insertMany(validMedia);
      return res.status(201).json({
        message: "Language data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error  genre:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new GenreController();
