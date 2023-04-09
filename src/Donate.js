import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Donate.css";
import Form_donate from "./Form_donate";
function Donate() {
  const [donated, setDonated] = useState(false);
  const handleClick = () => {
    setDonated(true);

    // if (donated === true) {
    //     console.log("lelelw");
    // return (

    // <div>
    //   <Link to="/donate_form"></Link>
    //   <Routes>
    //     <Route path="/donate_form" element={<Form_donate />} />
    //   </Routes>
    // </div>);
    // }
  };

  return (
    <div>
      <Link to="/donate_form"  style={{ textDecoration: 'none' }}>
        <button className="form_donate" onClick={handleClick}>
          <p className ="baka"> Donate </p>
          <FontAwesomeIcon class="heart" icon={faHeart} />
        </button>
      </Link>
      <div >
        {donated && (
          <Routes>
            <Route path="/donate_form" element={<Form_donate />} />
          </Routes>
        )}
      </div>
    </div>
  );
}
export default Donate;
