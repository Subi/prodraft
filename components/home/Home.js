import classes from "./Home.module.css"
import Image from "next/image";
import LandingPageIcon from "../../public/images/landing-page-icon.png"
import TeamNameInput from "./TeamNameInput";



function Home() {
    return (
        <div className={classes.homeContainer} >
            <div className={classes.logoContainer}>
                <Image alt={"Landing Page Icon"} src={LandingPageIcon} height={150} width={150} ></Image>
            </div>
            <div className={classes.teamInputContainer}>
                <TeamNameInput />
            </div>
            <div className={classes.createDraftButtonContainer}>
                <button className={classes.createDraftButton}>New Draft</button>
            </div>

        </div>
    )
}



export default Home;