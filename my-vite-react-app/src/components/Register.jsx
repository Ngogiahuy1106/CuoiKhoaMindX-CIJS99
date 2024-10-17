import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="grid">
      <form action="" className="display">
        <label htmlFor="" className="label_name">
          Name
        </label>
        <br />
        <input type="text" placeholder="Full Name" className="name" />
        <br />
        <label htmlFor="" className="label_email">
          Email
        </label>
        <br />
        <input type="email" placeholder="name@gmail.com" className="email" />
        <br />
        <label htmlFor="" className="label_phoneNumber">
          Phone Number
        </label>
        <br />
        <input type="number" placeholder="000-000-000" className="number" />
        <br />
        <label htmlFor="" className="label_password">
          Password
        </label>
        <br />
        <input type="password" placeholder="password" className="password" />
        <button className="button_logIn">Create My Account</button>
        <div className="button_logIn">Already have an account? Login here</div>
      </form>
      <img src="/Frame 290.png" alt="" className="image" />
    </div>
  );
};

export default Register;
