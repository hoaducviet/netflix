const { mongo } = require("mongoose");
const User = require("../models/User");
const Account = require("../models/Account");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

class UserController {
  //Get All User in Account
  async getUserAllbyAccount(req, res) {
    try {
      const idAccount = req.params.idaccount;

      //Kiểm tra trường dữ liệu nhập vào
      if (!idAccount) {
        return res.status(400).json({ message: "Id account are required" });
      }

      //Tìm thông tin Users theo ID Account
      const results = await User.find({ idAccount: idAccount });
      if (!results.length) {
        return res.status(404).json({ message: "User is null" });
      }

      return res.status(200).json(mutipleMongooseToObject(results));
    } catch (error) {
      console.error("Error retrieving media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //GET User By Id
  async getUserbyId(req, res) {
    try {
      const id = req.params.id;

      //Kiểm tra dữ liệu đầu vào
      if (!id) {
        return res.status(400).json({ message: "Id user is required" });
      }

      //Tìm thông tin User
      const result = await User.findById(id);
      if (!result) {
        return res.status(404).json({ message: "User not exits" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error retrieving media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Insert One User
  async insertOneUser(req, res) {
    try {
      const { idAccount, name } = req.body;
      const data = req.body;

      // Kiểm tra sự tồn tại của 2 trường dữ liệu nhập vào
      if (!idAccount || !name) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Kiểm tra Account có tồn tại không, trước khi thêm User
      const existingAccount = await Account.findById(idAccount);
      if (!existingAccount) {
        return res.status(400).json({ message: "Account not exists" });
      }

      // Kiểm tra Account đạt đến tối đa tài khoản chưa
      const users = await User.find({ idAccount: idAccount });
      if (users.length >= 5) {
        return res.status(409).json({ message: "Account have user limmited" });
      }

      // Kiểm tra User trong Account này đã tồn tại chưa
      const existingUser = await User.findOne({
        idAccount: idAccount,
        name: name,
      });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const newUser = new User(data);

      const result = await newUser.save();
      res.status(201).json({
        message: "User created successfully",
        media: mongooseToObject(result),
      });
    } catch (error) {
      console.error("Error insert media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Edit Media
  async editUser(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;

      //Kiểm tra trường dữ liệu nhập vào
      if (!id) {
        return res.status(400).json({ message: "Id user is required" });
      }

      const result = await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });

      // Kiểm tra lại result từ DB
      if (!result) {
        return res.status(404).json({ message: "User not exist" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error edit media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Delete User
  async deleteUser(req, res) {
    try {
      const id = req.params.id;

      //Kiểm tra trường dữ liệu nhập vào
      if (!id) {
        return res.status(400).json({ message: "Id user is required" });
      }

      // Tìm theo ID và Delelte User
      const result = await User.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).json({ message: "User doesnt exist" });
      }

      return res.status(200).json(mongooseToObject(result));
    } catch (error) {
      console.error("Error edit media:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new UserController();
