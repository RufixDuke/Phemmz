import React from 'react'
import classes from './Card.module.css'

const Card = ({ datum }) => {
    return (
        <>
            <div>
                <div className={classes.grid}>
                    <div className={classes.container}>
                        <div className={classes.image}>
                            <img src={datum.image} alt={datum.name} />
                        </div>
                        <div>
                            <div>
                                <h3>Dipper and Mabel Mortys</h3>
                                <div className={classes.flex}>
                                    <p>Unknown</p> 
                                    <p>Human</p>
                                </div>
                                
                            </div>

                            <div className={classes.ps}>
                                <p>Last Known Location:</p>
                                <h3>Citadel of Ricks</h3>
                            </div>

                            <div>
                                <p>First seen in:</p>
                                <h3>The Rickshank Rickdempton</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card;