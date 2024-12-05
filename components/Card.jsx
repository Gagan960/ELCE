import React from 'react';
// import pic from "../images/pic.jpg"
import "../components/Card.css"

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h2>{props.roll}</h2>
      <img src="" alt ="Student" />  
    </div>
  )
}

export default Card