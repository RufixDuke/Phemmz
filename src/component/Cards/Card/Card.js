import React from 'react'
import classes from './Card.module.css'

const Card = ({datas}) => {
    return (
        <>
            <div className={classes.flex}>
                <div>
                    <img src={datas.image} alt={datas.name} />
                </div>
                <div>
                    <div>
                        <h3>Dipper and Mabel Mortys</h3>
                        <li>Unknown</li> <li>Human</li>
                    </div>

                    <div>
                        <p>Last Known Location:</p>
                        <h3>Citadel of Ricks</h3>
                    </div>

                    <div>
                        <p>First seen in:</p>
                        <h3>The Rickshank Rickdempton</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;