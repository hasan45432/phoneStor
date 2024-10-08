const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    maxUse: {
      // 5
      type: Number,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    uses: {
      // 1
      type: Number,
      default: 0,
    },
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const DiscountModel = mongoose.models.Discount || mongoose.model("Discount", schema);

export default DiscountModel;
