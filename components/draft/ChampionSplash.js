import classes from './Draft.module.css'


function ChampionSplash({ image }) {
    return (
        <div className={classes.championSplash} style={{ backgroundImage: `url(${image})` }}></div>
    )
}



export default ChampionSplash


