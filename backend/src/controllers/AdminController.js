const Account = require("../../models/Account");
const Media = require("../../models/Media");
const MyList = require("../../models/MyList");
const Language = require("../../models/Language");
const Notification = require("../../models/Notification");
const User = require("../../models/User");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

class AdminController {}

module.exports = new AdminController();
