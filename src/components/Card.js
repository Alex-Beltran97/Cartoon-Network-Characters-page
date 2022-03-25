import React from 'react'
import '../Style/Card.css'

const Card = ({name,serie,year,img,logo})=>{
    return(
        <section className='container-character'>
            <img 
                className='character-img '
                src={require(`../img/character${img}.png`)}
                alt="character image"
            />
            <div className='container-info'>
                <h2>{name}</h2>
                <p>Serie: <span>{serie}</span></p>
                <p>Year: <span>{year}</span></p>
                <img
                    src={require(`../img/logo${logo}.png`)}
                    alt='logo character'
                />
            </div>
        </section>
    )
}

export default Card;