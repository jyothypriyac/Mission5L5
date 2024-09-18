const mongoose = require('mongoose');

//customer Schema
const TrademeSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  start_price: { type: String },
  reserve_price: { type: String },
});
//DEfine and Export
module.exports = mongoose.model("Item", TrademeSchema);
