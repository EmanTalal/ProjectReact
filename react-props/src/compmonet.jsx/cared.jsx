import React from 'react';




function Card(props) {
  return (
    <div className='card-container '>
      <image>{props.image}</image>
      <p>{props.description}</p>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item2}</li>

      </ul>
  
    </div>
  )
}
export default Card





