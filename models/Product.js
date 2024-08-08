const mongoose = require("mongoose");
require("./Comment");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String, // img src
    required: true,
  },
  comments: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
});

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", schema);

export default ProductModel;
