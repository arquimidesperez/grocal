import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;
  const { handleLogin } = props;

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
        e.preventDefault();
        handleLogin(formData);
      }}>
      <h3>Welcome back</h3>
      <label>
        username
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
        password
        <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          class='input-mobile'
        />
      </label>
      <div class='green-div'>
      <Link to='/register' class='link-font-change'>Register</Link>
      </div>
      <button class='green-button'>Submit</button>
      </form>
    </div>
  )
}
