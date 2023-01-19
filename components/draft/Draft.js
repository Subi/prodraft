import ChampionContent from "./ChampionContent"
import Header from "./Header"
import Footer from "./Footer"

function Draft({ data }) {
    return (
        <>
            <Header blueTeam={data.room.blueTeam} redTeam={data.room.redTeam} />
            <ChampionContent />
            <Footer />
        </>
    )
}



export default Draft