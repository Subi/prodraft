import classes from './Draft.module.css'


function BannedChampion({ image }) {
    return (
        <div className={classes.bannedChampion} style={{ backgroundImage: `url(${image})` }}></div>
    )
}



export default BannedChampion

