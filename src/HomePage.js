import "./HomePage.css";
import Menuleft from "./Menu_left";
import Search from "./search";
import Donate from "./Donate";
import App2 from "./App2";
import SignUp from "./SignUp";
import Login from "./Login";
import React, { useState , useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Logo from "./Image/LogoLT.png";
import Logo_CT from "./Image/Logo_Content.png";
import Hamburger from "./Image/hamburger.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (selectedOption, searchTerm) => {
    fetch(
      `https://api.example.com/search?selectedOption=${selectedOption}&searchTerm=${searchTerm}`
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
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // document.querySelector(".menu-container").classList.toggle("active");
  }


  const handleLinkClick = () => {
    if (isOpen === true) {
      setIsOpen(false);
    };
    // menuRef.current = document.querySelector('.menu-container');
    // console.log(menuRef);
  };
  const menuRef = useRef();
  menuRef.current = document.querySelector('.menu-container');
  const menuRef2 = useRef();
  menuRef2.current = document.querySelector('.hamburger_icon');
 
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)
      &&menuRef2.current && !menuRef2.current.contains(event.target)) {
        setIsOpen(false);
        // console.log(menuRef);
      }
      console.log(menuRef);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  

  return (
    <div class="All">
      <div class="header-setup">
        <img id="mot" src={Logo} alt="Logo LT" />
        {/* <button id="bar" onClick={handleClick}>
          {donated}
          <p> Donate </p>
          <FontAwesomeIcon class="heart" icon={faHeart} />
        </button> */}
        <div id="bar">
            <Donate/>
        </div>
      </div>
      <div class="header-setup-component">
        <img id="icon" src={Logo_CT} alt="Logo CT"  />

          <Link className="home" to="/home" >
            <p>My Books</p>
          </Link>
          <Routes>
            <Route path="/home" element={<App2 />} />
          </Routes>
       

        <div className="menu">
          <p>Menu</p>
          <details>
            <summary></summary>
            <ul>
               <li>
                
                  <Link to="/Menu_1">
                    <a>Option 1</a>
                  </Link>
                  <Routes>
                    <Route path="/Menu_1" element={<App2 />} />
                  </Routes>
               
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
          <Routes>
            <Route path="/login-menu" element={<Login />} />
          </Routes>
        



        
      
          <Link className="signup-menu" to="/signup-menu">
            <p>Sign Up</p>
          </Link>
          <Routes>
            <Route path="/signup-menu" element={<SignUp />} />
          </Routes>
        




        <div class="hamburger">
          {/* <BrowserRouter> */}
            <Link className="Transform" to="/menu2" onClick={toggleMenu}>
              <img class="hamburger_icon" src={Hamburger} alt="menu2" />
            </Link>
            <div
              className="menu-container"
              style={{
                position: "absolute",
                top: 0,
                right:0,
                display: isOpen ? 'block' : 'none',
                transition: "all 0.1s ease-in-out",
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <Routes>
                <Route path="/menu2" element={<Menuleft />} />
              </Routes>
            </div>
          {/* </BrowserRouter> */}
        </div>
      </div>
    </div>
    
  );
}

export default HomePage;
