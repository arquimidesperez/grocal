import React from 'react'
import { useState } from 'react'
import '../assets/css/Register.css'

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <form onSubmit={(e) => {
        handleRegister(formData);
      }}>
      <div class='green-div'>
      <h3>Register</h3>
      </div>
      <label>
        username:
        <br/>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          class='input-mobile'
        />
      </label>
      <br/>
      <label>
        email:
        <br/>
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          class='input-mobile'
        />
      </label>
      <br/>
      <label>
        password:
        <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          class='input-mobile'
        />
      </label>
      <button>Submit</button>
      </form>
    </div>
  )
}
