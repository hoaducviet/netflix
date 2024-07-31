const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

mongoose.plugin(slug);
const Media = new Schema(
  {
    title: { type: String, unique: true, required: true, maxLength: 255 },
    detail: { type: String, required: true, maxLength: 255 },
    label: { type: String, required: true, maxLength: 20 },
    videoURL: { type: String, required: true, maxLength: 255 },
    trailerURL: { type: String, required: true, maxLength: 255 },
    imageURL: { type: String, required: true, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

//Custom query helpers
Media.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};

//Add Plugin
Media.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("media", Media);
