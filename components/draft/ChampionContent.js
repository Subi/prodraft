import ChampionSplash from './ChampionSplash'
import classes from './Draft.module.css'


function ChampionContent() {
    return (
        <div className={classes.championContentContainer}>
            <div className={classes.blueTeamPicksContainer}>
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/24/24000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/57/57000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/38/38000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/236/236000.jpg"} />
                <ChampionSplash image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/267/267000.jpg"} />
            </div>
        </div>
    )
}



export default ChampionContent

