const Account = require("../models/Account");
const User = require("../models/User");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
class AccountController {
  //Get All User in Account
  async getUserAll(req, res) {
    try {
      const idAccount = req.params.id;

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

  //Sign In Account
  async signIn(req, res) {
    try {
      const { email, password } = req.body;

      // Kiểm tra trường dữ liệu nhập vào
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      // Tìm thông tin Account trong DB theo Email
      const result = await Account.findOne({ email: email });

      //Nếu không tồn tại Account -> Trả về lỗi
      if (!result) {
        return res.status(404).json({ message: "Account not exist" });
      }

      //Nếu tồn tại Account, nhưng không khớp Password -> Trả về lỗi
      if (result.password !== password) {
        return res.status(401).json({ message: "Password is incorrect" });
      }

      //Nếu qua các case bên trên -> Trả về messsage và thông tin tài khoản
      return res.status(201).json({
        message: "User signed in successfully",
        user: result,
      });
    } catch (error) {
      console.error("Error creating user:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //Sign Up Account
  async signUp(req, res) {
    try {
      const { email, password } = req.body;

      // Kiểm tra trường dữ liệu nhập vào
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      // Kiểm tra sự tồn tại của Account
      const existingAccount = await Account.findOne({ email: email });

      //Nếu tồn tại -> Trả về lỗi, nếu không -> tiếp tục Check
      if (existingAccount) {
        return res.status(409).json({ message: "Email already exists" });
      }

      // Tạo người mới theo Schema
      const newAccount = new Account({
        email: email,
        password: password,
      });

      const result = await newAccount.save();

      //Trả về dữ liệu và message khi tạo thành công
      return res.status(201).json({
        message: "User created successfully",
        user: mongooseToObject(result),
      });
    } catch (error) {
      console.error("Error creating user:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new AccountController();
