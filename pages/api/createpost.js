import dbConnect from '../../db/mongodb';
import Post from '../../models/Post';
import { nanoid } from 'nanoid';

export default async function handler(req, res) {
    await dbConnect();
    let newPostContent = req.body.newPost;
    let user = req.body.user;
    let avatar = req.body.avatar;
    let email = req.body.email;

    const date = new Date();
    const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear()
    ];
    const [hour, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];
    let currentDateTime = `${month}/${day}/${year} ${hour}:${minutes}:${seconds} UTC`;

    let newPost = new Post({
        post_id: nanoid(),
        content: newPostContent,
        username: user,
        avatar: avatar,
        email: email,
        created_at: currentDateTime
    });

    await newPost.save(function handler(err, response) {
        if (err) {
            res.send({ error: err.message });
        } else {
            res.send({ res: response });
        }
    });
}
