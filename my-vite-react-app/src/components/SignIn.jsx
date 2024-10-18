import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const Signin = () => {
  return (
    <div className="grid">
      <form action="" className='display'>
        <label htmlFor="" className='label_email'>Email</label>
        <br />
        <input type="email" placeholder="name@gmail.com" className='email' />
        <br />
        <label htmlFor="" className='label_password'>Password</label>
        <br />
        <input type="password" placeholder="password" className='password'/>
        <br />
        <button className='button_logIn'>Log in</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
      <img src="/Frame 290.png" alt="" className='image '/>
    </div>
  );
};

export default Signin;