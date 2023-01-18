import ChampionContent from "./ChampionContent"
import Header from "./Header"

function Draft({ data }) {
    return (
        <>
            <Header blueTeam={data.room.blueTeam} redTeam={data.room.redTeam} />
            <ChampionContent />
        </>
    )
}



export default Draft