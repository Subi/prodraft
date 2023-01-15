import classes from "./Home.module.css"


function TeamNameInput(props) {
    return (
        <>
            <input className={classes.blueTeamNameInput} type={"text"} placeholder={"Blue Team"} onChange={(e) => { props.setBlueTeamName(e.target.value) }} />
            <input className={classes.redTeamNameInput} type={"text"} placeholder={"Red Team"} onChange={(e) => { props.setRedTeamName(e.target.value) }} />
        </>
    )
}


export default TeamNameInput