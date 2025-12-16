import React from 'react'

function Card(props) {
  return (
    <div className='Card'>
        <img src={props.image} alt={props.title} className='card-img'/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Card