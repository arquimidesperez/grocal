import React from 'react'
import { useState } from 'react'
import '../assets/css/Register.css'
import workFromHome from '../assets/images/Work-from-home.png';

export default function Register(props) {
  return null;
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // });
  // const { username, email, password } = formData;
  // const { handleRegister } = props;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  // return (
  //   <div class='screen-width-div'>
  //     <form onSubmit={(e) => {
  //       e.preventDefault();
  //       handleRegister(formData);
  //     }}>
  //     <div class='green-div'>
  //     <h3>get your grocal started!</h3>
  //     </div>
  //     <label>
  //       username:
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
  //       email:
  //       <br/>
  //       <input
  //         type='text'
  //         name='email'
  //         value={email}
  //         onChange={handleChange}
  //         class='input-mobile'
  //       />
  //     </label>
  //     <br/>
  //     <label>
  //       password:
  //       <br/>
  //       <input
  //         type='password'
  //         name='password'
  //         value={password}
  //         onChange={handleChange}
  //         class='input-mobile'
  //       />
  //       </label>
  //       <br />
  //       <br />
  //     <button class='green-button'>Submit</button>
  //     </form>
  //     <img src={workFromHome}
  //       alt='Man looks at his flowers'
  //       class='work-from-home'/>
  //   </div>
  // )
}
