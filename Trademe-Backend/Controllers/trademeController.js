require("dotenv").config();
const mongoose = require("mongoose");

const Item = require("../model/item");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const searchByCriteria = (req, res) => {
  try {
    const titleSearchText = req.params.title;
    Item.find({
      $or: [
        { title: { $regex: titleSearchText, $options: "i" } },
        { description: { $regex: titleSearchText, $options: "i" } },
      ],
    }).then(function (items) {
      res.json(items);
    });

    console.log("searchByCriteria", titleSearchText);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { searchByCriteria };
