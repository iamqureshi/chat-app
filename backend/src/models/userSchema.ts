import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pic: {
        type: String,
        require: true,
        default: "https://previews.123rf.com/images/tissenvadim/tissenvadim1802/tissenvadim180200075/95393803-the-photographer-is-at-work-portrait-of-a-photographer-looking-into-the-lens-illustration.jpg"
    }
}, { timestamps: true })

const userModal = mongoose.model('users', userSchema);
module.exports = userModal;