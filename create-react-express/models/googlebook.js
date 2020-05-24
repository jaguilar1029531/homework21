const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebookSchema = new Schema({
    title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true},
  imageURL: { type: String, required: false},
  link: { type: String, required: true},
});

const Googlebook = mongoose.model("Googlebook", googlebookSchema);

module.exports = Googlebook;