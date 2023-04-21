import React, { useState } from 'react';
import './SignUp.css';
import forgot_pass from "./SignUp";
import { Routes, Route, Link } from "react-router-dom";
import HeaderAll from "../Format/HeaderAll";
import { useNavigate } from 'react-router-dom';
import { checkAuth, fetchDataPOST, host, setCookie } from '../helper';

function SignUp() {
    const [text, setText] = useState({
        username: '',
        password: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setText((prevProps) => ({
            ...prevProps,
            [name]: value
          }));
    };

    checkAuth().then((res) => {
        if (res) {
            navigate('/');
        }
    });

    const handleClick = (event) => {
        event.preventDefault();
        // console.log('Button clicked!');
        console.log(text)
        fetchDataPOST(host + `/login/`, {
            username: text.username,
            password: text.password
        }).then((res) => {
            console.log(res);
            if (res && res.message == "Logged In") {
                console.log(res);
                setCookie("sessionId", res.sessionId)
                setCookie("username", text.username)
                navigate('/');
            } else {
                console.log(res.message);
                setText((prevProps) => ({
                    ...prevProps,
                    status: res.message,
                    password: ''
                  }));
                // setIsShow(true);
            }
        }).catch((err) => {
            console.log(err);
        }
        );
    };

    return (
        <div>
            <div className='settings'>
                <div className='white-box'>
                    <h2>Sign Up</h2>
                    <p class="instruct">
                        Please enter your Liber online email and password to access your Open Library account.
                    </p>
                    <div className='Input'>
                        <label htmlFor="text-input" style={{ fontWeight: 'bold' }}>Your username</label>
                        {/* <Link to="/signup-menu">
                        <p>Forgot your Liber online email?</p>
                    </Link>
                    <Routes>
                        <Route path="/signup-menu" element={<forgot_pass />} />
                    </Routes> */}
                        <br />
                        <p style={{ color: 'red' }}>{text.status ? text.status : null}</p>
                        <input
                            type="text"
                            id="text-input"
                            name='username'
                            value={text.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='Input'>
                        <label htmlFor="text-input" style={{ fontWeight: 'bold' }}>Password</label>
                        <br />
                        <input
                            type="password"
                            id="text-input"
                            name='password'
                            onChange={handleChange}
                            value={text.password}
                            required
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
            <HeaderAll />
        </div>
    );
}

export default SignUp;
