import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./Book.css";
function Book({ numberIdbook }) {
    const [Library, setLibrary] = useState([]);
  useEffect(() => {
    fetch("../ditme2.json")
      .then((response) => response.json())
      .then((data) => setLibrary(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="Book_setting">
      <div>
       {Library.map((slide, index) => (
          <div key={index}> 
          <h1> {slide.pk === numberIdbook ? slide.fields.title
          : null}
          </h1>
          </div>
          ))}
      </div>
      <div className="Content_book">
        <div className="MidBook">
        {Library.map((slide, index) => (
          <div key={index}> 
          <img src= {slide.pk === numberIdbook ? `http://35.212.202.252:8000` + slide.fields.image
          : null}/>
         
          </div>
          ))}
        </div>
        <div className="BottomBook">
          <Link className="Previous">
            {" "}
            <FontAwesomeIcon icon={faBackward} />
          </Link>
          <Link className="HomeBook">
            {" "}
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link className="Next">
            <FontAwesomeIcon icon={faForward} />
          </Link>
        </div>
      </div>
      <div className="Book_footer">Footer</div>
    </div>
  );
}

export default Book;
