import connectToDB from "../../../../configs/db";
import categoryModel from "../../../../models/Category";

export async function POST(req) {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { body } = reqBody; 

    // Validation
    if (!body) {
      return Response.json(
        { message: "Body and productID are required" },
        { status: 400 }
      );
    }

    const category = await categoryModel.create({ body });

  

    return Response.json(
      {
        message: "Comment created successfully :))",
        data: category,
      },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: "Failed to create comment", error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const { id } = body;

    // Validation
    if (!id) {
      return Response.json({ message: "ID is required" }, { status: 400 });
    }

    await categoryModel.findOneAndDelete({ _id: id });
    return Response.json(
      { message: "User removed successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: "Failed to delete category", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectToDB();
  const comments = await categoryModel.find({}, "-__v"); // تمام کامنت‌ها را بدست بیاورید
  return Response.json(comments, { status: 200 });
}
