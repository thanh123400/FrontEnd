import "./App.css";
import App2 from "./App2";
import Menuleft from "./Menu_left";
import Search from "./search";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./Image/LogoLT.png";
import Logo_CT from "./Image/Logo_Content.png";
import Hamburger from "./Image/hamburger.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function App() {
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
  const [donated, setDonated] = useState(false);

  const handleClick = () => {
    setDonated(true);
    // Thêm xử lý khi người dùng click vào button
  };

  return (
    <div>
      <div class="header-setup">
        <img id="mot" src={Logo} alt="Logo LT" />
        <button id="bar" onClick={handleClick}>
          {donated}
          <p> Donate </p>
          <FontAwesomeIcon class="heart" icon={faHeart} />
        </button>
      </div>
      <div class="header-setup-component">
        <img id="icon" src={Logo_CT} alt="Logo CT" />
        <Router>
          <Link className="home" to="/home">
            <p>My Books</p>
          </Link>
          <Routes>
            <Route path="/home" element={<App2 />} />
          </Routes>
        </Router>

        <div className="menu">
          <p>Menu</p>
          <details>
            <summary></summary>
            <ul>
              <li>
                <Router>
                  <Link to="/home">
                    <a>Option 1</a>
                  </Link>
                  <Routes>
                    <Route path="/home" element={<App2 />} />
                  </Routes>
                </Router>
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
        <Router>
          <Link className="login-menu" to="/home">
            <p>Log In</p>
          </Link>
          <Routes>
            <Route path="/home" element={<App2 />} />
          </Routes>
        </Router>
        <Router>
          <Link className="signup-menu" to="/home">
            <p>Sign Up</p>
          </Link>
          <Routes>
            <Route path="/home" element={<App2 />} />
          </Routes>
        </Router>
        <div class="hamburger">
        
          <Router>
            <Link to="/menu2">
            <img class="hamburger_icon" src={Hamburger} alt="menu2" />
            </Link>
            <Routes>
              <Route path="/menu2" element={<Menuleft />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
