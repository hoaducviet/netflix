const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

mongoose.plugin(slug);
const Notification = new Schema(
  {
    title: { type: String, unique: true, required: true },
    idUser: { type: String, required: true },
    detail: { type: String, required: true },
    imageURL: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Custom query helpers
Notification.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};

//Add Plugin
Notification.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("notification", Notification);
