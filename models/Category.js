const mongoose = require("mongoose");
require("./Product");

const schema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
});

const categoryModel =
  mongoose.models.Category || mongoose.model("Category", schema);

export default categoryModel;
