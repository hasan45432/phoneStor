import connectToDB from "../../../../../configs/db";
import CommentModel from "../../../../../models/Comment";

export async function PUT(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const { id } = body;
    // Validation (You)

    await CommentModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isAccept: false,
        },
      }
    );
    return Response.json(
      { message: "Comment reject successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
