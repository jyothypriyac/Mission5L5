const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

const db = mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected!"));

//Import model
const Item = require("./model/Item");
const ItemsJson = require("./config/items.json");

//Add Item
const addItem = (newItem) => {
  Item.create(newItem).then((newItem) => {
    console.info("New Item Added");
  });
};

//Find Item
const fIndItem = (searchObject) => {
  const title = searchObject.title;
  //make case insensitive
  Item.find({ $or: [
    { title: { $regex: title, $options: "i" } },
   { description: { $regex: title, $options: "i" } },
  ]}).then(
    (searchItem) => {
      console.info(searchItem);
      console.info(`${searchItem.length} matches`);
    }
  );
};
//update Item
const updateItem = (upItem) => {
  console.log("update item", upItem, upItem["title"]);
  Item.findOneAndUpdate({ _id: upItem["_id"] }, upItem).then((resultItem) => {
    console.info("Item Updated", resultItem);
  });
};

//Remove Item
const removeItem = (_id) => {
  Item.deleteOne({ _id }).then((resultItem) => {
    console.info("Item Removed");
  });
};

const seedData = () => {
  Item.insertMany(ItemsJson).then((result) => {
    console.log("Seed data inserted", result);
  });
};
//Export all Methods
module.exports = {
  addItem,
  fIndItem,
  updateItem,
  removeItem,
  seedData,
};
