import React from 'react'
import "./ButtonGreen.scss";
import color from "../../images/color.png"

function IpsumTitle() {
    return (
      <div className="tiny-wrapper">
        <div>
          <h4 className="hdl-title">Lorem ipsum dolor sit amet </h4>
        </div>

        <div className="btn-green">
          <button className="green-btn">Lorem Ipsum </button>
        </div>

        <div className='background'>
          <img className='color-img' src={color} alt="" />
        </div>
      </div>
    );
}

export default IpsumTitle