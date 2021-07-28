import React from "react";
import Flower from "../assets/images/Flowers.png";
import workFromHome from "../assets/images/Work-from-home.png";
import "../assets/css/Homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="screen-width-div">

      <div className="green-div green-div-margin">
        <p className="w-text">
          do you have a passion for agriculture or micro-entrepreneurship?
        </p>
      </div>
      <div className="homepage-content-container">
        <div className="image-and-content">
          <div className="image-container">
            <img
              src={Flower}
              alt="Man looks at his flowers"
              className="flowers"
            />
          </div>

          <div className="text-container">

            <p className="b-text marg-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. 
            </p>
          </div>
        </div>
      </div>

      <br />

      <div className="green-div green-div-margin">
        <p className="w-text">
          do you have a passion for agriculture or micro-entrepreneurship?
        </p>
      </div>

      <div className="homepage-content-container">
        <div className="image-and-content-2">
          <div className="image-container">
            <img
              src={workFromHome}
              alt="Man looks at his flowers"
              className="flowers"
            />
          </div>

          <div className="text-container">
            <p className="b-text marg-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              nibh nunc. 
            </p>
          </div>
        </div>
      </div>

      <div className='bottom-div-spacer'>
      <div className="green-div center-container">
        <Link to="/login" className="w-text link-font-change ">
          login
        </Link>
      </div>
      </div>

      <div></div>


    </div>
  );
}
