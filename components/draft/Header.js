import classes from './Draft.module.css'


function Header(props) {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.blueTeamContainer}>
                {props.blueTeam.Name}
            </div>
            <div className={classes.redTeamContainer}>
                {props.redTeam.Name}
            </div>
        </div>
    )
}



export default Header