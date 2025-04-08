import axios from "axios";

export async function getAllBlogs() {
  try {
    const res = await axios.get("https://www.maheshcarpets.com/api/get-blogs");
    return res.data;
  } catch (err) {
    console.error("Failed to fetch blogs:", err.message);
    return [];
  }
}
