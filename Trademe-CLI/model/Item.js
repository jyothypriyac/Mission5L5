const mongoose = require("mongoose");

//trademe item Schema
const TrademeSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  start_price: { type: String },
  reserve_price: { type: String },
});
//Define and Export
module.exports = mongoose.model("Item", TrademeSchema);
