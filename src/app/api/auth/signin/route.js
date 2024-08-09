// API Route Handler
import {
  generateAccessToken,
  generateRefreshToken,
  validateEmail,
  validatePassword,
  verifyPassword,
} from "@/utils/auth";
import UserModel from "../../../../../models/User";
import connectToDB from "../../../../../configs/db";

export async function POST(req) {
  try {
    await connectToDB(); // Ensure to await connection
    const body = await req.json();
    const { email, password } = body;

    // Validation
    const isValidEmail = validateEmail(email);
    const isValidPassword = verifyPassword(password);

    if (!isValidEmail || !isValidPassword) {
      return Response.json(
        { message: "Email or password is invalid" },
        { status: 419 }
      );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 422 });
    }

    // Confirm password match
    const isCorrectPassword = await verifyPassword(password,user.password);

    if (!isCorrectPassword) {
      return Response.json(
        { message: "Email or password is not correct" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });

    await UserModel.findOneAndUpdate({ email }, { $set: { refreshToken } });

    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `token=${accessToken}; path=/; httpOnly=true;max-age=604800`
    );
    headers.append(
      "Set-Cookie",
      `refreshToken=${refreshToken}; path=/; httpOnly=true;max-age=604800`
    );

    return Response.json(
      { message: "User logged in successfully :))" },
      {
        status: 200,
        headers,
      }
    );
  } catch (err) {
    console.error(err); // Log error for debugging
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
