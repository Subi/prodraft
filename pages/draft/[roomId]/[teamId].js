import Draft from "@/components/draft/Draft"
import { database } from "@/firebase/config"
import { async } from "@firebase/util"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import io from 'socket.io-client'

function TeamView(props) {
    const [room, setRoom] = useState(props.room)
    const [socket, setSocket] = useState(null)

    const socketInitializer = async () => {
        await fetch('/api/socket')
        const newSocket = io()
        setSocket(newSocket)
    }


    useEffect(() => {
        if (!room) return

        socketInitializer()
    }, [room])



    useEffect(() => {
        if (!socket) return
        socket.on('connect', () => {
            socket.emit('joinroom', room.Id)
        })
    }, [socket])

    return (
        <>
            {!room ? "not a valid room" : <Draft data={props} />}
        </>
    )
}




export const getStaticProps = async (context) => { // revist this to address if request fails can't send undefined value as prop 

    const { roomId } = context.params


    const room = await getDoc(doc(database, "rooms", roomId)).then((snap) => {
        if (!snap.exists()) return

        return snap.data()
    })
    if (!room) return {  // Hacky 🤷‍♀️
        props: {
            room: null
        }
    }

    return {
        props: { room }
    }

}


export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}



export default TeamView