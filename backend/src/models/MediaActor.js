const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

mongoose.plugin(slug);

const MediaActor = new Schema(
  {
    idMedia: { type: String, required: true },
    idActor: { type: String, required: true },
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

//Custom query helpers
MediaActor.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};

//Add Plugin
MediaActor.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("mediaactor", MediaActor);
