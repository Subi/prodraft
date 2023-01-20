import ChampionSplash from './ChampionSplash'
import ChampionCarousel from "./ChampionCarousel"
import classes from './Draft.module.css'


function ChampionContent({ champions }) {
    return (

        <div className={classes.championContentContainer}>
            <div className={classes.blueTeamPicksContainer}>
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/114/114000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/62/62000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/127/127000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/236/236000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/267/267000.jpg"} />
            </div>
            <ChampionCarousel champions={champions} />
            <div className={classes.redTeamPicksContainer}>
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/126/126000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/254/254000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/103/103000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/221/221000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/117/117000.jpg "} />
            </div>
        </div>
    )
}



export default ChampionContent

