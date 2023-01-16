import { useEffect } from "react"
import io from 'socket.io-client'
let socket

function TeamView() {

    useEffect(() => socketInitializer, [])


    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()
    }


    useEffect(() => {
        if (!socket) return
        socket.on('connect', () => {
            console.log("socket has connected")
        })
    }, [socket])




    return (
        <p> This is the view for the teams </p>
    )
}




export default TeamView