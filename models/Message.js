import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
    {
        room: {
            type: String,
            required: true,
            index: true,
        },
        user: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Message = mongoose.model('Message', MessageSchema);
export default Message;
