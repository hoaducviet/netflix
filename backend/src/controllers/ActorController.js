const Actor = require("../models/Actor");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class ActorController {
  //Get Actor By Id
  async getActorbyId(req, res) {
    try {
      const id = req.params.id;

      //Tìm thông tin Actor
      const result = await Actor.findById(id);
      if (!result) {
        return res.status(404).json({ message: "Actor is null" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error actor:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Get All Actor
  async getActorAll(req, res) {
    try {
      //Tìm thông tin Actor
      const results = await Actor.find();
      if (!results.length) {
        return res.status(404).json({ message: "Actor is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error Actor:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // POST Many Actor
  async insertManyActor(req, res) {
    try {
      const actorData = req.body;

      if (!Array.isArray(actorData)) {
        return res.status(400).json({
          message: "Invalid data format. Expected an array of actors objects.",
        });
      }

      const validMedia = [];
      const errors = [];

      for (let actor of actorData) {
        if (!actor.name) {
          errors.push({ actor, error: "Missing required fields" });
          continue;
        }

        // Kiểm tra tồn tại của Actor chưa
        let existingActor = await Actor.findOne({
          name: actor.name,
          national: actor.national,
        });
        if (existingActor) {
          errors.push({
            actor,
            error: "Actor with this name already exists",
          });
          continue;
        }

        validMedia.push(actor);
      }

      if (errors.length) {
        return res.status(400).json({
          message: "Some actor items could not be added",
          errors,
        });
      }

      const results = await Actor.insertMany(validMedia);
      return res.status(201).json({
        message: "Actor data added successfully",
        data: mutipleMongooseToObject(results),
      });
    } catch (error) {
      console.error("Error Actor:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new ActorController();
