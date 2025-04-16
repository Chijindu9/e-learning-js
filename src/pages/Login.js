import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
        <div className="auth-form">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>Don’t have an account? <Link to="/Signup">Sign Up</Link></p>
            </div>
    </div>
  );
};

export default Login;