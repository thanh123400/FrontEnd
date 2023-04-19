import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HeaderAll.css";
import "../Header/Menu_left.css";
import Search from "../Header/search";
import Donate from "../Header/Donate";
import Logo from "../Home/Image/LogoLT.png";
import Logo_CT from "../Home/Image/Logo_Content.png";
import Hamburger from "../Home/Image/hamburger.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
function HeaderAll() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (selectedOption, searchTerm) => {
    fetch(
      `http://35.212.202.252:8000/${selectedOption}&searchTerm=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //   const [donated, setDonated] = useState(false);

  //   const handleClick = () => {
  //     setDonated(true);
  //   };
  const [Library, setLibrary] = useState([]);
  useEffect(() => {
    fetch("./ditme.json")
      .then((response) => response.json())
      .then((data) => setLibrary(data))
      .catch((error) => console.log(error));
  }, []);
  // Hambergur menu open close setup 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuRef = useRef();
  menuRef.current = document.querySelector(".menu-container");
  const menuRef2 = useRef();
  menuRef2.current = document.querySelector(".hamburger_icon");

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuRef2.current &&
        !menuRef2.current.contains(event.target)
      ) {
        setIsOpen(false);
       
      }

    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Menu open close setup
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    if (detailsOpen === false) setDetailsOpen(true);
    console.log(detailsOpen);
  };
  const detailsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setDetailsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [detailsRef]);


 

  return (
    <div class="All">
      {/* <App2 />  */}

      <div className="header-setup">
        <img id="mot" src={Logo} alt="Logo LT" />
        {/* <button id="bar" onClick={handleClick}>
          {donated}
          <p> Donate </p>
          <FontAwesomeIcon class="heart" icon={faHeart} />
        </button> */}
        <div id="bar">
          <Donate />
        </div>
      </div>
      <div class="header-setup-component">
        <img id="icon" src={Logo_CT} alt="Logo CT" />

        <Link className="home" to="/home">
          <p>My Books</p>
        </Link>

        <div className="menu">
          <p>Menu</p>
          <details ref={detailsRef}  open={false}>
            <summary onClick={toggleDetails}></summary>
            
            {detailsOpen ?
            <ul>
              <li>
               Option 1
              </li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul> : null}
          </details>
        </div>

        <Search options={["All", "Name", "Author"]} onSearch={handleSearch} />
        {searchResults.length !== 0 && (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link to={`/search/${result.id}`}>{result.title}</Link>
              </li>
            ))}
          </ul>
        )}

        <Link className="login-menu" to="/login-menu">
          <p>Log In</p>
        </Link>

        <Link className="signup-menu" to="/signup-menu">
          <p>Sign Up</p>
        </Link>

        {/* <Routes>
          <Route path="/signup-menu" element={<SignUp />} />
        </Routes> */}

        <div class="hamburger">
          <img
            class="hamburger_icon"
            onClick={toggleMenu}
            src={Hamburger}
            alt="menu2"
          />

          <div
            className="menu-container"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              display: isOpen ? "block" : "none",
              transition: "all 0.1s ease-in-out",
              transform: isOpen ? "translateX(0)" : "translateX(100%)",
              width: "100vw",
              height: "100vh",
              backdropFilter: "blur(2px)"
            }}
          >
            <div className="corner-component">
              <ul>
                <li className="title">My Open Library</li>
                <img className="size_image" src={Logo_CT} alt="Logo LT" />
                <li className="title">Browse</li>
                <li className="contentt">
                  <Link className="nonedecc"> hh</Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAll;
