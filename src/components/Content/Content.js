import React from "react";
import "./Content.scss";
import sml from "../../images/thonjza.png"

function IpsumDescription() {
  return (
    <section className="wrapper-main">
      {/* <img className="sm" src={sml} alt=""></img> */}

      <h4 className="hdl-title"> Lorem ipsum dolor sit amet </h4>
      <div>
        <p className="desc">
          Donec pede iusto. fringilla vel. aliquet nec. vulputate eget. arcu. In
          enim iusto rhoncus ut, imperdiet a, venenatis vitae, justo
        </p>
      </div>
    </section>
  );
}

export default IpsumDescription;
