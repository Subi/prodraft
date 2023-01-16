import { useEffect } from "react"
import io from 'socket.io-client'
let socket

function TeamView() {
    const socketInitializer = async () => {

        await fetch('/api/socket')
        socket = io()

        socket.on('connect' , () => {
            console.log("connected")
        })
    }
    
    useEffect(() => socketInitializer(), [])



    return (
        <p> This is the view for the teams </p>
    )
}




export default TeamView