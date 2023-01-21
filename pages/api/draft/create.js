
const createDraftHandler = (req, res) => {
    if (req.method != "POST") return
    const { blueTeamName, redTeamName } = req.body
    const newDraftRoom = createDraftRoom(blueTeamName, redTeamName)

    return res.status(200).json(newDraftRoom)
}



const createDraftRoom = (blueName, redName) => {
    return {
        Id: Math.random().toString(20).slice(8),
        turn: 0,
        timeLeft: 30,
        currentTeam: null,
        blueTeam: {
            Name: blueName,
            Id: Math.random().toString(25).slice(7),
            currentAction: "INITIALIZING",
            isReady: false,
            isTurn: false,
            picks: [],
            bans: []
        },
        redTeam: {
            Name: redName,
            Id: Math.random().toString(25).slice(7),
            currentAction: "INITIALIZING",
            isReady: false,
            isTurn: false,
            picks: [],
            bans: []
        }
    }
}


export default createDraftHandler