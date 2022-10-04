import React from 'react'
import "./Head.scss";
import path from "../../images/path9.png"
function Head() {
  return (
    <div>

      <div className="head-icons">
        <div className="left-icon">


          <img src={path} alt=""></img>
        </div>

        <div className='right'>

          <div className="icon2">Consecteuter</div>
          <div className="icon3">


            <button>Anmelden</button>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Head
