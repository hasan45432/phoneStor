import connectToDB from "../../../../../configs/db";
import UserModel from "../../../../../models/User";
import {
  generateAccessToken,
  hashPassword,
  generateRefreshToken,
} from "@/utils/auth";
import { roles } from "@/utils/constants";
import { verifyPassword } from "@/utils/auth";
export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { name, email, password } = body;

    // Validation (You)

    const isUserExist = await UserModel.findOne({
      $or: [{ name }, { email }],
    });

    if (isUserExist) {
      return Response.json(
        {
          message: "The username or email or phone exist already !!",
        },
        {
          status: 422,
        }
      );
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email, name });
    const refreshToken = generateRefreshToken({ email, name });

    const users = await UserModel.find({});

    await UserModel.findOneAndUpdate(
      { email },
      { name },
      {
        $set: {
          refreshToken,
        },
      }
    );

    await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: users.length > 0 ? roles.USER : roles.ADMIN,
      refreshToken,
    });

    const headers = new Headers();
    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true`);
    headers.append(
      "Set-Cookie",
      `refreshToken=${refreshToken};path=/;httpOnly=true;max-age=604800`
    );

    return Response.json(
      { message: "User signed up successfully :))" },
      {
        status: 201,
        headers,
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "An error occurred during the signup process." },
      {
        status: 500,
      }
    );
  }
}
