import dbConnect from '../../db/mongodb';
import Post from '../../models/Post';

export default async function handler(req, res) {
    await dbConnect();
    let data = await Post.find();
    res.send({ Posts: data });
}
