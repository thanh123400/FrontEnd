import React, { useState } from "react";
import "./SignUp.css";
import HeaderAll from "../Format/HeaderAll";
function SignUp() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    // console.log("Button clicked!");
  };

  return (
    <div>
      <div className="settings">
        <div className="white-box">
          <h2>Sign Up</h2>
          <p class="instruct">
            Complete the form below to create a new Liber Online account.
            <span class="redline">Each field is required</span>
          </p>
          <div className="Input">
            <label htmlFor="text-input" style={{ fontWeight: "bold" }}>
              Your email address
            </label>
            <br />
            <input
              type="text"
              id="text-input"
              value={text}
              onChange={handleChange}
            />
          </div>
          <div className="Input">
            <label htmlFor="text-input" style={{ fontWeight: "bold" }}>
              Choose a password
            </label>
            <br />
            <input
              type="text"
              id="text-input"
              value={text}
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
              value={text}
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
