import connectToDB from "../../../../../configs/db";
import CommentModel from "../../../../../models/Comment";
import { authAdmin } from "@/utils/serverHelpers";

export async function PUT(req) {
  try {
    await connectToDB();
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      throw new Error("This api protected and you can't access it !!");
    }

    const body = await req.json();
    const { id } = body;
    // Validation (You)

    await CommentModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isAccept: true,
        },
      }
    );
    return Response.json(
      { message: "Comment accepted successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
