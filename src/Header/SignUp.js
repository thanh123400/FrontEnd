import React, { useState } from "react";
import "./SignUp.css";
import HeaderAll from "../Format/HeaderAll";
import { useNavigate } from 'react-router-dom';
import { checkAuth, fetchDataPOST, host, setCookie } from '../helper';

function SignUp() {
  const [text, setText] = useState({
    username: '',
    password: '',
    message: '',
    useremail: '',
    repass: '',
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
    if (text.password != text.repass) {
      setText((prevProps) => ({
        ...prevProps,
        status: "Password does not match",
        password: '',
        repass: ''
      }));
      return;
    }

    fetchDataPOST(host + `/login/register/`, {
      username: text.username,
      password: text.password,
      useremail: text.useremail
    }).then((res) => {
      console.log(res);
      if (res && res.message == "Registered") {
        console.log(res);
        setCookie("sessionId", res.sessionId)
        setCookie("username", text.username)
        navigate('/');
      } else {
        console.log(res.message);
        setText((prevProps) => ({
          ...prevProps,
          status: res.message,
          password: '',
          repass: ''
        }));
      }
    }).catch((err) => {
      console.log(err);
    }
    );
  };

  return (
    <div>
      <div className="settings">
        <div className="white-box">
          <h2>Sign Up</h2>
          <p class="instruct">
            Complete the form below to create a new Liber Online account.
            <p class="redline">Each field is required</p>
          </p>
          <p style={{ color: 'red' }}>{text.status ? text.status : null}</p>
          <div className="Input">
            <label htmlFor="text-input" style={{ fontWeight: "bold" }}>
              Your username
            </label>
            <br />
            <input
              type="text"
              id="text-input"
              value={text.username}
              onChange={handleChange}
            />
          </div>
          <div className="Input">
            <label htmlFor="text-input" style={{ fontWeight: "bold" }}>
              Your email
            </label>
            <br />
            <input
              type="email"
              id="text-input"
              value={text.useremail}
              onChange={handleChange}
            />
          </div>
          <div className="Input">
            <label htmlFor="text-input" style={{ fontWeight: "bold" }}>
              Choose a password
            </label>
            <br />
            <input
              type="password"
              id="text-input"
              value={text.password}
              onChange={handleChange}
            />
          </div>
          <div className="Input">
            <label htmlFor="text-input" style={{ fontWeight: "bold" }}>
              Confirm password
            </label>
            <br />
            <input
              type="text"
              id="text-input"
              value={text.password}
              onChange={handleChange}
            />
          </div>
          <label
            htmlFor="text-input"
            style={{ fontWeight: "bold", fontSize: "0.8rem" }}
          >
            By signing up, you agree to the Internet Archive's Terms of Service.
          </label>
          <br />
          <button onClick={handleClick} className="button">
            SignUp
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
