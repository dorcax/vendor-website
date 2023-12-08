import React from 'react'
import "./cards.css"
const Card = ({ type, quantity, link, icon }) => {
  return (
    <div className="maincard">
      <div className="card">
        <h3>{type}</h3>
        <p>{quantity}</p>
        <div className='link'>
          <a href="">{link}</a>
        </div>

      </div>
      <div className="card-right">
        <div className="cardright">
          <i class="fas fa-angle-up"></i>
          <span>20%</span>
        </div>
        <div className="icon"><i class={icon}></i></div>
      </div>
    </div>
  );
}

export default Card
