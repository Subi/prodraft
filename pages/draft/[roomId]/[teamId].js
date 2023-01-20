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




export const getStaticProps = async (context) => {

    const { roomId } = context.params
    const championsArr = []

    const room = await getDoc(doc(database, "rooms", roomId)).then((snap) => {
        if (!snap.exists()) return

        return snap.data()
    })

    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json", {
        method: "GET"
    })
    const { data } = await response.json()

    for (let champion in data) { // do i need to actually do this or can I just pass the full data back through props 🤔
        championsArr.push({
            name: data[champion].name,
            key: data[champion].key,
            id: data[champion].id,
            image: data[champion].image
        })
    }

    if (!room) return {  // Hacky 🤷‍♀️
        props: {
            room: null
        }
    }

    return {
        props: { room, championsArr }
    }

}


export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}



export default TeamView