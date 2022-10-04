import React from "react";
import "./WrapperTabs.scss";

function IpsumDetail() {
  return (
    <>
      <div className="primary-wrapper">
        <div className="wrapper">
          <div className="wrapper-container">
            <div>
              <h3 className="hdl-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing.
              </h3>
            </div>

            <div className="labels">
              <div className="first-input">
                <div className="search-btn">
                  <label className="label">Lorem Ipsum </label>
                  <svg
                    className="search"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="30"
                    viewBox="0 0 32 32"
                  >
                    <path d="M13.455 2.182c6.226 0 11.273 5.047 11.273 11.273 0 2.851-1.058 5.454-2.803 7.439l7.483 7.485-1.029 1.029-7.485-7.483c-1.985 1.745-4.588 2.803-7.439 2.803-6.226 0-11.273-5.047-11.273-11.273s5.047-11.273 11.273-11.273zM13.455 3.636c-5.422 0-9.818 4.396-9.818 9.818s4.396 9.818 9.818 9.818c5.422 0 9.818-4.396 9.818-9.818s-4.396-9.818-9.818-9.818z"></path>
                  </svg>
                  
                                    <input className="input" type="text"/>
                </div>
              </div>

              <div className="second-input">
                <div className="location-icon">
                  <label className="label2">Lorem Ipsum dolor</label>
                  <svg
                    className="location-svg"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="30"
                    viewBox="0 0 32 32"
                  >
                    <path d="M13.455 2.182c6.226 0 11.273 5.047 11.273 11.273 0 2.851-1.058 5.454-2.803 7.439l7.483 7.485-1.029 1.029-7.485-7.483c-1.985 1.745-4.588 2.803-7.439 2.803-6.226 0-11.273-5.047-11.273-11.273s5.047-11.273 11.273-11.273zM13.455 3.636c-5.422 0-9.818 4.396-9.818 9.818s4.396 9.818 9.818 9.818c5.422 0 9.818-4.396 9.818-9.818s-4.396-9.818-9.818-9.818z"></path>
                  </svg>

                  <input className="input-location" type="text"/>
                </div>
              </div>

              <div className="btn-main">
                <button className="blue-btn">Lorem Ipsum</button>
              </div>
            </div>
          </div>


        <div >
          <div className="title">
            <h3 className="hdl-2">LOREM IPSUM DOLOR SIT AMET</h3>
          </div>

          <div className="buttons">
            <div>
              <button className="btn1">LOREM IPSUM</button>
            </div>
            <div>
              <button className="btn2">LOREM IPSUM DOLOR SIT AMET</button>
            </div>
            <div>
              <button className="btn3">CONSECTETUER ADIPISCING</button>
            </div>
            <div>
              <button className="btn4">LOREM IPSUM</button>
            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  );
}

export default IpsumDetail;
