import jwt from "jsonwebtoken";

export default async function ValidateAdmin(request) {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedtoken = await jwt.verify(token, process.env.JWT_SECRET);
    return decodedtoken.username;
  } catch (error) {
    console.log("Error in ValidateAdmin", error);
    throw new Error(error.message);
  }
}
