const User = require("../models/User");
const Notification = require("../models/Notification");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class NotificationController {
  //Get All Notification by User
  async getNotificationAllbyUser(req, res) {
    try {
      const idUser = req.params.iduser;

      //Kiểm tra trường dữ liệu nhập vào
      if (!idUser) {
        return res.status(400).json({ message: "Id User is required" });
      }

      //Tìm thông tin Notification theo ID User
      const results = await Notification.find({ idUser: idUser });
      if (!results.length) {
        return res.status(404).json({ message: "Notification is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error retrieving media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //POST Insert One Notification
  async insertOneNotification(req, res) {
    try {
      const { idUser, title, detail, imageURL } = req.body;

      //Kiểm tra dữ liệu đầu vào
      if (!idUser || !title || !detail || !imageURL) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // kiểm tra tồn tại của thông báo chưa
      const existingNotification = await Notification.findOne({ title: title });
      if (existingNotification) {
        return res.status(409).json({ message: "Notification already exists" });
      }

      //Kiểm tra tồn tại của User
      const user = await User.findById(idUser);
      if (!user) {
        return res.status(404).json({ message: "User not exits" });
      }

      const newNotification = new Notification(req.body);
      const result = await newNotification.save();
      return res.status(201).json({
        message: "Notification added successfully",
        notification: mongooseToObject(result),
      });
    } catch (error) {
      console.error("Error insert media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new NotificationController();
