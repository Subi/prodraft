import classes from "./Home.module.css"


function TeamNameInput(props) {
    return (
        <>
            <input className={classes.blueTeamNameInput} type={"text"} placeholder={"Blue Team"} />
            <input className={classes.redTeamNameInput} type={"text"} placeholder={"Red Team"} />
        </>
    )
}


export default TeamNameInput