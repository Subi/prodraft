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
            socket.on("joinroom", id => {
                const room = io.sockets.adapter.rooms.get(id)
                if (!room) { // This might be optional because we can joinroom whenever 
                    console.log(`${socket.id} has connected to room ${id}`)
                    socket.join(id)
                }
            })
        })
    }

    res.end()
}



export default SocketHandler