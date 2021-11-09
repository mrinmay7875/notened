import dbConnect from '../../db/mongodb';
import Post from '../../models/Post';

export default async function handler(req, res) {
    await dbConnect();
    // console.log(req.body);

    let data = await Post.find({ username: req.body.username });
    // let data = await Post.find();
    // res.send({ Posts: data1 });

    res.send({ Post: data });
}
