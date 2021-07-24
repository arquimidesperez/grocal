import React from 'react'
import { useState } from 'react'
import '../assets/css/Register.css'

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <div class='green-div'>
      <h3>Register</h3>
      </div>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </div>
  )
}
