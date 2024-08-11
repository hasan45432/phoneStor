import connectToDB from "../../../../configs/db";
import DiscountModel from "../../../../models/Discount";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { code, percent, maxUse, product } = body;

    // Validation (You) ✅

    await DiscountModel.create({
      code,
      percent,
      maxUse,
      product,
    });

    return Response.json(
      { message: "Discount code created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    // Validation (You)

    await DiscountModel.findOneAndDelete({ _id: id });
    return Response.json(
      { message: "Discount removed successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  connectToDB();
  const users = await DiscountModel.find({}, "-__v");
  return Response.json(users);
}
