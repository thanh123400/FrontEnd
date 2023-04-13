import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./Book.css";

function Book({ numberIdbook }) {
  return (
    <div className="Book_setting">
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
