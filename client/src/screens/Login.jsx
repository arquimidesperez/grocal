import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Login.css";
import Flower from "../assets/images/Flowers.png";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="screen-width-div">

      <div className="login-container">

        <div className="login-image-container">
          <img
            src={Flower}
            alt="Man looks at his flowers"
            className="flowers"
          />
        </div>
        
        <div className="login-form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(formData);
            }}>
            <div className="green-div">
              <h3 className="w-text center-content">welcome back</h3>
            </div>

            <br />

            <label>
              username
              <br />
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="input-mobile"
              />
            </label>

            <br />
            <br />

            <label>
              password
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="input-mobile"
              />
            </label>

            <br />
            <br />
            <div className="green-div">
              <Link
                to="/register"
                className="w-text link-font-change">
                first time? register here
              </Link>
            </div>
            <br />
            <button className="green-button make-larger">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
