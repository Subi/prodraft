
const createDraftHandler = (req, res) => {
    if (req.method != "POST") return
    const { blueTeamName, redTeamName } = req.body
    const newDraftRoom = createDraftRoom(blueTeamName, redTeamName)

    return res.status(200).json(newDraftRoom)
}



const createDraftRoom = (blueName, redName) => {
    return {
        roomId: Math.random().toString(20).slice(8),
        blueTeam: {
            Name: blueName,
            Id: Math.random().toString(25).slice(7)
        },
        redTeam: {
            Name: redName,
            Id: Math.random().toString(25).slice(7)
        }
    }
}


export default createDraftHandler