import classes from "./Home.module.css"
import Image from "next/image";
import LandingPageIcon from "../../public/images/landing-page-icon.png"
import TeamNameInput from "./TeamNameInput";
import TeamLinks from "./TeamLinks";
import { useState } from "react";




function Home() {

    const [blueTeamName, setBlueTeamName] = useState("")
    const [redTeamName, setRedTeamName] = useState("")
    const [blueTeamLink, setBlueTeamLink] = useState("")
    const [redTeamLink, setRedTeamLink] = useState("")



    const createNewDraft = async () => {
        const response = await fetch('api/draft/create', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "blueTeamName": blueTeamName,
                "redTeamName": redTeamName
            })
        })

        const data = await response.json()
        setBlueTeamLink(`localhost:3000/${data.roomId}/${data.blueTeam.Id}`)
        setRedTeamLink(`localhost:3000/${data.roomId}/${data.redTeam.Id}`)
    }



    return (
        <div className={classes.homeContainer} >
            <div className={classes.logoContainer}>
                <Image alt={"Landing Page Icon"} src={LandingPageIcon} height={150} width={150} ></Image>
            </div>
            <div className={classes.teamInputContainer}>
                {!blueTeamLink && !redTeamLink ? <TeamNameInput setBlueTeamName={setBlueTeamName} setRedTeamName={setRedTeamName} /> : <TeamLinks blueLink={blueTeamLink} redLink={redTeamLink} />}
            </div>
            <div className={classes.createDraftButtonContainer}>
                {!blueTeamLink && !redTeamLink ? <button className={classes.createDraftButton} onClick={() => { createNewDraft() }} >Create Draft</button> : <button className={classes.createDraftButton} onClick={() => { setBlueTeamLink(""), setRedTeamLink("") }} >New Draft</button>}
            </div>

        </div>
    )

}


export default Home;