import Message from '../models/Message.js';

class SocketManager {
    constructor(io) {
        this.io = io; // * Initialize socket.io instance
    }

    init() {
        this.io.on('connection', (socket) => { // * Listen for new socket connections
            console.log(`Client Connected, ${socket.id}`);
            socket.on('join_room', (data) => this.handleJoinroom(socket, data)); // * Handle 'join_room' event
            socket.on('send_message', (data) => this.handleSendMessage(socket, data)); // * Handle 'send_message' event
            socket.on('disconnect', () => this.handleDisconnection(socket)); // * Handle 'disconnect' event
        });
    }
    async handleJoinroom(socket, { username, text,room }) {
        socket.join(room);
        console.log(`${username} joined chat ${room}`);
        try {
            // * Retrieve message history for the room
            const history = await Message.find({ room }).sort({ createdAt: 1 }).limit(50);
            socket.emit('load_history', history); // * Send history to the joining user
        } catch (error) {
            console.error(`History retrieve failed, ${error.message}`);
        }

        socket.to(room).emit('receive_message', {
            user: 'SYSTEM',
            text:`${username} has joined the chat.`,
            createdat: new Date(),
        });
    }

    async handleSendMessage(socket, { username, room, text }) {
        const payload = {
            user: username,
            text,
            createdat: new Date(),
        };
        this.io.to(room).emit('receive_message', payload);

        try {
            // * Save the message to the database
            await Message.create({
                user: username,
                room,
                text,
            });
        } catch (error) {
            console.error(`handlesendMessage Error: ${error.message}`);
        }
    }

    async handleDisconnection(socket) {
        console.log(`Client Disconnected ${socket.id}`);
    }
}

export default SocketManager;
