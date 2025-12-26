import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import SocketManager from './sockets/socketmanager.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__filename, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

const socketmanager = new SocketManager(io);
socketmanager.init();

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server listening @ PORT:${PORT}`);
});
