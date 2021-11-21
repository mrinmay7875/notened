import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true,
        unique: [true, 'Post ID must be specifed']
    },
    username: { type: String, required: true },
    content: { type: String, required: true },
    avatar: { type: String, required: true },
    created_at: { type: String, default: Date.now, required: true },
});

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
