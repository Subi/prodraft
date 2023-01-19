import BannedChampion from './BannedChampion'
import classes from './Draft.module.css'


function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.blueBanContainer}>
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/112.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/104.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/120.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/145.png"} />
            </div>
            <div className={classes.redBanContainer}>
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/112.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/104.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/120.png"} />
                <BannedChampion image={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/145.png"} />
            </div>
        </div>
    )
}




export default Footer