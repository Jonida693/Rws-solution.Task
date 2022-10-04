import React from "react";
import "./Footer.scss";
// import bacground from "../../images/footer-background.png"
import phoone  from "../../images/phone-svg.png";
import  email  from "../../images/email-icon.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="menus ">
        <div className="first-colon ">
          <ul className="first">
            <img className="phone-nr" src={phoone} alt="" />
            <li className="phone">+49 123 456 78 000</li>
            <li>Vivamus</li>
            <li>quam</li>
            <li>venenatis</li>
            <li>tincidunt</li>
            <li>faucibus</li>
          </ul>
        </div>
        <div className="second-colon">
          <ul className="first">
            <img class="email-add" src={email} alt=''/>
            <li className="email">info@loremipsum.com</li>
            <li> Elementrum</li>
            <li>THE LOREM IPSUM</li>
            <li>REPLY</li>
          </ul>
        </div>

        <div className="third-colon">
          <ul className="third">
            <li>Datenschutz</li>
            <li>Impressum</li>
            <li>Cookie Richtlinien</li>

            <li>Allgemeine Geschafsbedingungen</li>
          </ul>
        </div>
      </div>

      <div className="copyright">Copvright © 2021 All rights reserved.</div>
      <button className="big-btn">Lorem ipsum dolor sit amet</button>
    </footer>
  );
}

export default Footer;
