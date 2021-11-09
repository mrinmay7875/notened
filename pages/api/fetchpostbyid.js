import dbConnect from '../../db/mongodb';
import Post from '../../models/Post';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await dbConnect();

        let data = await Post.find({ post_id: req.body.post_id });

        res.send({
            Post: data
        });
    }
}
