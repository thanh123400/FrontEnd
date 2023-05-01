import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import HomePage from "./Home/HomePage";
import BookInfor from "./Library/Book_infor";
import SignUp from "./Header/SignUp";
import Login from "./Header/Login";
import Form_donate from "./Header/Form_donate";
import Book from "./Book";
function App() {
  const [Library, setLibrary] = useState([]);
  useEffect(() => {
    fetch("./ditme.json")
      .then((response) => response.json())
      .then((data) => setLibrary(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("../ditme2.json")
      .then((response) => response.json())
      .then((data) => setLibrary(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <BrowserRouter>
      <Routes fallback={<div>Loading...</div>}>
        {Library.map((slide, index) => (
          <Route
            key={index}
            path={`/bookInfor/${slide.pk}`}
            element={<BookInfor numberIdbook={slide.pk} />}
          />
        ))}

        
        {Library.map((slide, index) => (
          <Route
            key={index}
            path={`/ReadBook/${slide.pk}`}
            element={<Book numberIdbook={slide.pk} />}
          />
        ))}



        {/* <Route path="/bookInfor/1" element={<BookInfor numberIdbook={1} />} /> */}
        <Route index element={<HomePage />} />
        <Route path="/signup-menu" element={<SignUp />} />
        <Route path="/login-menu" element={<Login />} />
        {/* <Route path="*" element={<HomePage/>} />  */}

        <Route path="/donate_form" element={<Form_donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
