import connectToDB from "../../../../configs/db";
import ProductModel from "../../../../models/Product";
// import fs from "fs";
const fs = require("fs");
import path from "path";

export async function POST(req) {
  try {
    await connectToDB();
    const formData = await req.formData();
    const name = formData.get("name");
    const price = formData.get("price");
    const shortDescription = formData.get("shortDescription");
    const longDescription = formData.get("longDescription");
    const category = formData.get("category");
    const img = formData.get("img");

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
    fs.writeFileSync(imgPath, buffer);

    const product = await ProductModel.create({
      name,
      price,
      category,
      shortDescription,
      longDescription,
      img: `${process.env.NEXT_PUBLIC_link}/uploads/${filename}`,
    });

    return Response.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

// Image Uploader
export async function PUT(req) {
  const formData = await req.formData();
  const img = formData.get("img");

  // Validation
  if (!img) {
    return Response.json(
      { message: "Product has not image !!" },
      { status: 400 }
    );
  }

  try {
    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;

    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    // ✅
    return Response.json(
      { message: "File uploaded successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    // Validation (You)

    await ProductModel.findOneAndDelete({ _id: id });
    return Response.json({ message: "User removed successfully :))" });
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  connectToDB();
  const products = await ProductModel.find({}, "-__v").populate("comments");
  return Response.json(products);
}
