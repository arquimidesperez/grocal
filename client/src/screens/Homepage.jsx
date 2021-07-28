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
              Microentrepreneurs with a passion for agriculture can take
              advantage of their small growing area to make some extra
              income on the side. Utilize your backyard, front-yard,
              growing pots or even become a micro-greens farmer right in
              the comfort of your own home. 
            </p>
          </div>
        </div>
      </div>

      <br />

      <div className="green-div green-div-margin">
        <p className="w-text">
        make money from home and take part in a sustainability revolution
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
              Make money from the comfort of your own home while being part of
              a sustainability revolution addressing the needs of your own community
              to end food deserts and make fresh produce accesible to everyone.
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
