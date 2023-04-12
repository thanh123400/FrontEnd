import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./HomePage.css";
import "./Menu_left.css";
import Menuleft from "./Menu_left";
import Search from "./search";
import Donate from "./Donate";
import App2 from "./App2";
// import BookInfor from"./Book_infor";
import SignUp from "./SignUp";
import Login from "./Login";
import "./App2.css";
import Logo from "./Image/LogoLT.png";
import Logo_CT from "./Image/Logo_Content.png";
import Hamburger from "./Image/hamburger.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
function HomePage() {
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

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // document.querySelector(".menu-container").classList.toggle("active");
  };
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };
  const menuRef = useRef();
  menuRef.current = document.querySelector(".menu-container");
  const menuRef2 = useRef();
  menuRef2.current = document.querySelector(".hamburger_icon");
  const menuRef3 = useRef();
  menuRef3.current = document.querySelector("#detail_status");

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuRef2.current &&
        !menuRef2.current.contains(event.target)
      ) {
        setIsOpen(false);
        // console.log(menuRef);
      }
      //   console.log(menuRef);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div class="All">
      <App2 />

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

        {/* <Link className="home" to="/home">
          <p>My Books</p>
        </Link>
        <Routes>
          <Route path="/home" element={<Menuleft />} />
        </Routes> */}

        <div className="menu">
          <p>Menu</p>
          <details id="detail_status" open={detailsOpen}>
            <summary onClick={toggleDetails}></summary>
            <ul>
              <li>
                {/* <Link to="/Menu_1">
                  <a>Option 1</a>
                </Link>
                <Routes>
                  <Route path="/Menu_1" element={<Menuleft />} />
                </Routes> */}
              </li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </details>
        </div>
        <Search
          options={["Option 1", "Option 2", "Option 3"]}
          onSearch={handleSearch}
        />
        {searchResults.length === 0 && (
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
          {/* <BrowserRouter> */}

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
                <li className="contentt">
                  <Link className="nonedecc"> yamate</Link>
                </li>
                <li className="title">Browse</li>
                <li className="contentt">
                  <Link className="nonedecc"> uu</Link>
                </li>
                <li className="contentt">
                  <Link className="nonedecc"> kudashai</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* </BrowserRouter> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
