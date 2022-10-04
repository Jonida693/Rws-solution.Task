import React, { Component } from "react";
import "./SliderCards.scss";
import path from "../../images/path9.png";
import card from "../../images/icon-cards.png";

import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <div className="slider-content">
          <div className="slider">
            <Slider {...settings}>
              <div className="card1">
                <div className=" card-content">
                  <img src={path} alt=""></img>
                  <div className="slide-content">
                    <div className="duble-icon">
                      <img src={card} alt=""></img>
                    </div>

                    <div className="pharagraph">
                      <p className="slider-description">
                        Lorem ipsum dolor sit amet, consectetuer acioiscino e t.
                        Aenean commodo liœula ece dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec. bellentesque eu. pretum Guis sem. Nulla
                        consequat massa quis enim
                      </p>
                    </div>
                  </div>

                  <div className="name">
                    <h4>Max Mustermann</h4>
                    <p className="ab">Aenean vuloutate (AB) ,Maecenas</p>
                  </div>
                </div>
              </div>

              <div className="card2">
                <div className=" card-content">
                  <img src={path} alt=""></img>
                  <div className="slide-content">
                    <div className="duble-icon">
                      <img src={card} alt=""></img>
                    </div>

                    <div className="pharagraph">
                      <p className="slider-description">
                        Lorem ipsum dolor sit amet, consectetuer acioiscino e t.
                        Aenean commodo liœula ece dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec. bellentesque eu. pretum Guis sem. Nulla
                        consequat massa quis enim
                      </p>
                    </div>
                  </div>

                  <div className="name">
                    <h4>Max Mustermann</h4>
                    <p className="ab">Aenean vuloutate (AB) ,Maecenas</p>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className=" card-content">
                  <div>
                    <img src={path} alt=""></img>
                  </div>

                  <div className="slide-content">
                    <div className="duble-icon">
                      <img src={card} alt=""></img>
                    </div>

                    <div className="pharagraph">
                      <p className="slider-description">
                        Lorem ipsum dolor sit amet, consectetuer acioiscino e t.
                        Aenean commodo liœula ece dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec. bellentesque eu. pretum Guis sem. Nulla
                        consequat massa quis enim
                      </p>
                    </div>
                  </div>

                  <div className="name">
                    <h4>Max Mustermann</h4>
                    <p className="ab">Aenean vuloutate (AB) ,Maecenas</p>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className=" card-content">
                  <div>
                    <img src={path} alt=""></img>
                  </div>

                  <img src={card} alt=""></img>
                  <p className="slider-description">
                    Lorem ipsum dolor sit amet, consectetuer acioiscino e t.
                    Aenean commodo liœula ece dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec. bellentesque
                    eu. pretum Guis sem. Nulla consequat massa quis enim
                  </p>

                  <div className="name">
                    <h4>Max Mustermann</h4>
                    <p className="ab">Aenean vuloutate (AB) ,Maecenas</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
