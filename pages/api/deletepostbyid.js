import dbConnect from "../../db/mongodb";
import Post from "../../models/Post";

export default async function handler(req, res) {
  if (req.method === "POST") {
      await dbConnect();

      let data = await Post.deleteOne({ post_id: req.body.post_id });

      res.send({ data: data });
  }
}