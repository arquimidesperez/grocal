import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Login.css'
import Flower from '../assets/images/Flowers.png';

export default function Login(props) {
  return null;
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: ''
  // });
  // const { username, password } = formData;
  // const { handleLogin } = props;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }))
  // }

  // return (
  //   <div class='screen-width-div'>
  //     <form onSubmit={(e) => {
  //       e.preventDefault();
  //       handleLogin(formData);
  //     }}>
  //     <div class='green-div body-green-div'>
  //       <h3>Welcome back</h3>          
  //     </div>
  //     <label>
  //       username
  //       <br/>
  //       <input
  //         type='text'
  //         name='username'
  //         value={username}
  //         onChange={handleChange}
  //         class='input-mobile'
  //       />
  //     </label>
  //     <br/>
  //     <label>
  //       password
  //       <br/>
  //       <input
  //         type='password'
  //         name='password'
  //         value={password}
  //         onChange={handleChange}
  //         class='input-mobile'
  //         />
  //       </label>
  //       <br/>
  //       <br/>
  //     <div class='green-div'>
  //       <Link to='/register' class='link-font-change'>Register</Link>
  //     </div>
  //       <br />
  //     <button class='green-button'>Submit</button>
  //     </form>
  //     <img src={Flower}
  //       alt='Man looks at his flowers'
  //       class='flowers'/>
  //   </div>
  // )
}
