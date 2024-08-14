const mongoose = require("mongoose");
require("./Product");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isAccept: {
    type: Boolean,
    default: false,
  },
  productName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  productID: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
});

const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", schema);

export default CommentModel;
