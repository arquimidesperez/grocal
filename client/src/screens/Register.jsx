import React from 'react'
import { useState } from 'react'
import '../assets/css/Register.css'
import workFromHome from '../assets/images/Work-from-home.png';

export default function Register(props) {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='screen-width-div'>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}>

      <div className='green-div center-content'>
      <h3 className='w-text'>get your grocal started!</h3>
      </div>
        
      <br />

      <label>
        username
        <br/>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          className='input-mobile'
        />
        </label>
        
        <br />
        <br />
        
      <label>
        email
        <br/>
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          className='input-mobile'
        />
        </label>
        
        <br />
        <br />

      <label>
        password
        <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          className='input-mobile'
        />
        </label>

        <br />
        <br />

      <button className='green-button make-larger'>Submit</button>
      </form>

      <img src={workFromHome}
        alt='Man looks at his flowers'
        className='work-from-home' />
      
    </div>
  )
}
