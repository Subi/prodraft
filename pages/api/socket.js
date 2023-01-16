import { Server } from 'socket.io';
import { io } from 'socket.io-client';

const SocketHandler = (req, res) => {
    if (res.socket.io) {
        console.log("Socket is already running")
    } else {
        console.log("Socket is initializing")
        const io = new Server(res.socket.server)
        res.socket.server.io = io



        io.on('connection', socket => {
            console.log(socket.id)
        })
    }

    res.end()
}



export default SocketHandler