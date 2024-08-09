import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("token");
  cookies().delete("refreshToken");

  return Response.json({ message: "Logout is done" });
}
