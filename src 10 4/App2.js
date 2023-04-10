import "./App2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "./Image/images.jpg";
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
  return (
    <div className="setting">
      <div className="content">
        <div className="slider-wrapper-1">
          <h2>Welcome to Open Library</h2>
          {/* <Slider {...Slide_setting}>
  {slidesData.map((slide, index) => (
    <div className="img-customize" key={index}>
      <img src={slide.image} />
      <h3>{slide.title}</h3>
    </div>
  ))}
</Slider> */}
          <Slider {...Slide_setting} >
            <div className="img-customize">
              <img src={Book}/>
              <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div >
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Not In Library</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/> 
            <button className ="button_text">Borrow</button>
            </div>
          </Slider>
        </div>
        <div className="slider-wrapper-2">
        <h2>Trending Books</h2>
          <Slider {...Slide_setting} >
            <div className="img-customize">
              <img src={Book}/>
           <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div >
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/> 
            <button className ="button_text">Borrow</button>
            </div>
            
          </Slider>
        </div>
        <div className="slider-wrapper-1">
        <h2>Trending Books</h2>
          <Slider {...Slide_setting} >
            <div className="img-customize">
              <img src={Book}/>
           <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div >
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/> 
            <button className ="button_text">Borrow</button>
            </div>
            
          </Slider>
        </div>
        <div className="slider-wrapper-2">
        <h2>Trending Books</h2>
          <Slider {...Slide_setting} >
            <div className="img-customize">
              <img src={Book}/>
           <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div >
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/> 
            <button className ="button_text">Borrow</button>
            </div>
            
          </Slider>
        </div>
        <div className="slider-wrapper-1  ">
        <h2>Trending Books</h2>
          <Slider {...Slide_setting} >
            <div className="img-customize">
              <img src={Book}/>
           <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div >
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/>
            <button className ="button_text">Borrow</button>
            </div>
            <div className="img-customize">
            <img src={Book}/> 
            <button className ="button_text">Borrow</button>
            </div>
            
          </Slider>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App2;
