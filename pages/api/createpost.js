import dbConnect from '../../db/mongodb';
import Post from '../../models/Post';
import { nanoid } from 'nanoid';

export default async function handler(req, res) {
    await dbConnect();
    let newPostContent = req.body.newPost;
    let newPost = new Post({
        post_id: nanoid(),
        content: newPostContent,
        username: 'Dolly',
        avatar: 'https://robohash.org/atqueevenieteos.png?size=50x50&set=set1'
    });

    await newPost.save(function handler(err, response) {
        if (err) {
            res.send({ error: err.message });
        } else {
            res.send({ res: response });
        }
    });
}
