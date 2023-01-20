import classes from './Draft.module.css'


function Champion({ champions }) {

    const results = champions.map(champion => {
        return <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.image.full}`} />
    })


    return (
        <div className={classes.championOptions}>
            {results}
        </div>
    )
}



export default Champion