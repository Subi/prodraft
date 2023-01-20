import Champion from './Champion'
import classes from './Draft.module.css'
import Image from 'next/image'
import TopRoleIcon from "../../public/images/Position_Challenger-Top.png"
import JungleRoleIcon from "../../public/images/Position_Challenger-Jungle.png"
import MidRoleIcon from "../../public/images/Position_Challenger-Mid.png"
import BotRoleIcon from "../../public/images/Position_Challenger-Bot.png"
import SupportRoleIcon from "../../public/images/Position_Challenger-Support.png"


function ChampionCarousel({ champions }) {
    return (
        <div className={classes.championCarouselContainer}>
            <div className={classes.filterContainer}>
                <div className={classes.rolesFilterContainer}>
                    <Image src={TopRoleIcon} width={40} height={40} />
                    <Image src={JungleRoleIcon} width={40} height={40} />
                    <Image src={MidRoleIcon} width={40} height={40} />
                    <Image src={BotRoleIcon} width={40} height={40} />
                    <Image src={SupportRoleIcon} width={40} height={40} />
                </div>
                <div className={classes.searchFilterContainer}>
                    <input className={classes.searchBarFilter} type={"text"} placeholder={"Search"} />
                </div>
            </div>
            <div className={classes.championsCarousel}>
                <Champion champions={champions} />
            </div>
        </div>
    )
}




export default ChampionCarousel