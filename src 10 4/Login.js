import React, { useState } from 'react';
import './SignUp.css';
import forgot_pass from "./SignUp";
import { Routes, Route, Link } from "react-router-dom";

function SignUp() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className='settings'>
            <div className='white-box'>
                <h2>Sign Up</h2>
                <p class="instruct">
                    Please enter your Liber online email and password to access your Open Library account.
                </p>
                <div className='Input'>
                    <label htmlFor="text-input" style={{ fontWeight: 'bold' }}>Email or your username</label>
                    {/* <Link to="/signup-menu">
                        <p>Forgot your Liber online email?</p>
                    </Link>
                    <Routes>
                        <Route path="/signup-menu" element={<forgot_pass />} />
                    </Routes> */}
                    <br />
                    <input
                        type="text"
                        id="text-input"
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <div className='Input'>
                    <label htmlFor="text-input" style={{ fontWeight: 'bold' }}>Password</label>
                    <br />
                    <input
                        type="text"
                        id="text-input"
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <Link to="/signup-menu">
                        <p>Forgot your Liber online email?</p>
                    </Link>
                    <Routes>
                        <Route path="/signup-menu" element={<forgot_pass />} />
                    </Routes>
                <button onClick={handleClick} className='button'>
                    Login
                </button>
            </div>
            <div class="DESCRIPTION">

                <h1>ABOUT OUR PPROJECT</h1>

                <p>
                    Liber Online is an open, editable library catalog, <br />
                    building towards a web page for every book ever <br />
                    published.
                </p>

            </div>
        </div>
    );
}

export default SignUp;
