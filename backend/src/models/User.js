const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

mongoose.plugin(slug);

const User = new Schema(
  {
    name: { type: String, required: true, maxLength: 20 },
    idAccount: { type: String, required: true },
    idAvatar: { type: String },
    role: { type: String, default: "Adult" },
  },
  {
    timestamps: true,
  }
);

//Custom query helpers
User.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};

//Add Plugin
User.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("user", User);
