import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Enter Your Full Name" className="input-box" required/>
        <input type="email" placeholder="eg. gabbytech101@gmail.com" className="input-box" required />
        <input type="password" placeholder="Enter a strong password" className="input-box" required/>
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>

        {/* <hr/>
        <span>Or Login here</span> */}
      </form>
      <p>Already have an account? <Link to="/login">Login</Link> here</p>
    </div>
  );
};

export default SignUp;