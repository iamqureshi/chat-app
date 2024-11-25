import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    content: { type: String, trim: true },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chats'
    }
}, {
    timestamps: true
});

const messageModal = mongoose.model('messages', messageSchema)
module.exports = messageModal;