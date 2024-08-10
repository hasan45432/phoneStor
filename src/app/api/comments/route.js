import connectToDB from "../../../../configs/db";
import CommentModel from "../../../../models/Comment";
import ProductModel from "../../../../models/Product";

export async function POST(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { username, description, email, productID } = reqBody;

    // Validation

    const comment = await CommentModel.create({
      username,
      description,
      email,
      productID,
    });

    const updatedProduct = await ProductModel.findOneAndUpdate(
      {
        _id: productID,
      },
      {
        $push: {
          comments: comment._id,
        },
      }
    );

    return Response.json(
      {
        message: "Comment created successfully :))",
        data: comment,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  await CommentModel.findOneAndUpdate(
    { status: 200},
    {
      isAccept: true,
    }
  );
  const comments = await CommentModel.find({}, "-__v");
  return Response.json(comments);
}
