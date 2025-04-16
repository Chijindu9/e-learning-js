import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <h1>SignUp with Edenites Academy</h1>
      <div className="signup-box">
            <form className='main-form'>
                <input type="text" placeholder="Enter your username" className="input-box"/>
                <input type="email" placeholder="eg. gabbytech101@gmail.com" className="input-box" />
                <input type="password" placeholder="Enter a strong password" className="input-box"/>
                <button type="submit">SignUp</button>
                <hr/>
                <span>Or Login here</span>
            </form>

            {/* Testing a nested to-do list */}
            <form className='new-item-form'>
                <div className='form-row'>
                    <label htmlFor='item'>New Item</label>
                    <input type="text" id="item" />
                    <button className="btn">Add</button>
                </div>
                <h1 className='todo-head'>To do List</h1>
                <ul className='list'>
                    <li>
                        <label>
                            <input type='checkbox'/>
                            Item 1
                        </label>
                        <button className='btn btn-danger'>Delete</button>
                    </li>
                    
                    <li>
                        <label>
                            <input type='checkbox'/>
                            Item 2
                        </label>
                        <button className='btn btn-danger'>Delete</button>
                    </li>

                    <li>
                        <label>
                            <input type='checkbox'/>
                            Item 3
                        </label>
                        <button className='btn btn-danger'>Delete</button>
                    </li>
                </ul>
            </form>
      </div>
    </div>
  );
};

export default Login;