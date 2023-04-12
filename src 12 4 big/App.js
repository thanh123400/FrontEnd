import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import HomePage from "./HomePage";
import BookInfor from "./Book_infor";
import SignUp from "./SignUp";
import Login from "./Login";
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
    {/* <Route path="/bookInfor/1" element={<BookInfor numberIdbook={1} />} /> */}
    <Route index element={<HomePage />} />
    <Route path="/signup-menu" element={<SignUp />} />
    <Route path="/login-menu" element={<Login />} />
     {/* <Route path="*" element={<HomePage/>} />  */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
