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
        {Library.map((slide, index) => (
          <div key={index}> {slide.id === numberIdbook ? <div> </div> 
          : null}
          </div>
          ))}
      <div>hihi</div>
      <div className="Content_book">
        <div className="MidBook">
          <p>hiạhdsjfhdsjkdh</p>
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
      <div className="Book_footer">hihi</div>
    </div>
  );
}

export default Book;
