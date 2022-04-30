import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card/Card';
import classes from './Card/Card.module.scss'

const Cards = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetch1 = fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())

        const fetch2 = fetch('https://rickandmortyapi.com/api/episode')
            .then(result => result.json())

        Promise.all([fetch1, fetch2]).then(values => setData(
            values[0].results.map((item, i) => {
                item.name1 = item.name
                return Object.assign({}, item, values[1].results[i])
            })
        ))
    }, [])

    return (
        <>{console.log(data)}
            
                {data.map((datum) =>
                    <Card key={datum.id} datum={datum} />
                )}
            
        </>
    )
}

export default Cards;