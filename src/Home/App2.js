import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "./Image/images.jpg";
import { Navigate, useNavigate } from "react-router-dom";
function GoToBook({ idBook }) {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate(`/bookInfor/${idBook}`);
  // }, [idBook]);
  // return null;
}
function App2() {
  let Slide_setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    // centerMode: true, // đưa nội dung ra giữa màn hình
    // centerPadding: 0,
    // arrows: true,
    // prevArrow: <button className="slick-prev" />,
    // nextArrow: <button className="slick-next" />,
  };
  const [Library, setLibrary] = useState([]);

  useEffect(() => {
    fetch("./ditme.json")
      .then((response) => response.json())
      .then((data) => setLibrary(data))
      .catch((error) => console.log(error));
      console.log("31321093");
  }, []);
  return (
    <div className="setting">
          
      <div className="content">
        <div className="slider-wrapper-1">
          <h2>Welcome to Open Library</h2>
          <Slider {...Slide_setting}>
            {Library.map(
              (slide, index) => (
                // slide.model === "appModels.book" && (
                <div className="img-customize" key={index}>
                  <div>
                    <Link to={`/bookInfor/${slide.pk}`}>
                      <img
                        src={`http://35.212.202.252:8000` + slide.fields.image}
                      />
                    </Link>
                  </div>
                  {/* <p> {slide.fields.title}</p> */}
                  <button className="button_text">Borrow</button>
                </div>
              )
              // )
            )}
          </Slider>
        </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  );
}

export default App2;
