import "./Book_infor.css";
import bookfirst from "./Image/images.jpg";
import book_icon_1 from "./Image/book_icon_1.svg";
import book_icon_2 from "./Image/book_icon_2.svg";
import book_icon_3 from "./Image/book_icon_3.svg";
import React, { useState } from "react";
import Rating from "./Rating";
import Comment from "./Comment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function BookInfor() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (rating) => {
    setRating(rating);
  };
  let Slide_setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className="Book_infor_setting">
      <div className="Book_infor_content">
        <div className="Book_infor_content_setting">
          <div className="Book_content_1">
            <img className="p1" src={bookfirst} />
            <button>
              <a href="#">Read Nows</a>
            </button>
            <button>Want to Read</button>

            <Rating rating={rating} onRatingChange={handleRatingChange} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
                justifyContent: "space-between",
                marginLeft: "50px",
                marginRight: "50px",
              }}
            >
              <div>
                <img className="p2" src={book_icon_1} />
              </div>
              <img className="p2" src={book_icon_2} />
              <img className="p2" src={book_icon_3} />
            </div>
          </div>

          <div className="Book_content_2">hi2</div>

          <div className="Book_content_3">
            <h3>Sách cùng thể loại</h3>
            <Slider {...Slide_setting}>
              <div className="set">
                <img className="p4" src={bookfirst} />
                <button>Borrow</button>
              </div>
              <div className="set">
                <img className="p4" src={bookfirst} />
                <button>Borrow</button>
              </div>
              <div className="set">
                <img className="p4" src={bookfirst} />
                <button>Not In Library</button>
              </div>
              <div className="set">
                <img className="p4" src={bookfirst} />
                <button>Borrow</button>
              </div>
              <div className="set">
                <img className="p4" src={bookfirst} />
                <button>Borrow</button>
              </div>
              <div className="set">
                <img className="p4" src={bookfirst} />
                <button>Borrow</button>
              </div>
            </Slider>
          </div>
          <div className="Book_content_4"></div>
          <div className="Book_content_5">
             {/* <Routes>
              <Route path="/bookInfor/jjj" element={<Comment />} />
            </Routes>  */}
             <Comment/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfor;
