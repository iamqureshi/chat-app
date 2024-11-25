// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin

import mongoose from "mongoose";

const chatsSchema = new mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true
})



const chatModal = mongoose.model('chats', chatsSchema)
module.exports = chatModal;