import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    id: String,
    username: String,
    content: String,
    avatar: String
});

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
