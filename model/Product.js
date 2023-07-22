const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  tag: String,
  color: String,
  criteria: Array,
});

module.exports = mongoose.model("product", productSchema);
