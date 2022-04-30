import React from 'react'
import classes from './Card.module.scss'

const Card = ({ datum }) => {
    return (
        <>
            <div className={classes.card}>
                <img src={datum.image} alt="" />
                <div>
                    <div>
                        <h2>{datum.name1}</h2>
                        <p>{`${datum.status} ${datum.species}`}</p>
                    </div>
                    <div>
                        <span>Last Known Location:</span>
                        <p>{datum.location.name}</p>
                    </div>
                    <div>
                        <span>First seen in:</span>
                        <p>{datum.origin.name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;