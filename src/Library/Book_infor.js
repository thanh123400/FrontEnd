import React, { useState, useRef, useEffect } from "react";
import "./Book_infor.css";
import bookfirst from "./Image/images.jpg";
import book_icon_1 from "./Image/book_icon_1.svg";
import book_icon_2 from "./Image/book_icon_2.svg";
import book_icon_3 from "./Image/book_icon_3.svg";
import HeaderAll from "../Format/HeaderAll";
import Rating from "./Rating";
import Comment from "./Comment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchDataGET, host} from "../helper";

function StarRating(props) {
  const {
    rating,
    ratingsCount,
    wantToReadCount,
    currentlyReadingCount,
    haveReadCount,
  } = props;

  const filledStars = Math.floor(rating);
  const halfFilledStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (halfFilledStar ? 1 : 0);
  // console.log(filledStars);
  const styles = {
    star: {
      color: "#ccc",
      display: "inline-block",
      width: "100px",
      height: "30px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      // paddingLeft:'20px'
    },
    filled: {
      color: "#ffc107",
      fontSize: "22px",
    },
    halffiled: {
      background: `linear-gradient(90deg, #ffd400 ${
        (rating - filledStars) * 100
      }%, #ccc ${(1 - rating + filledStars) * 100}%)`,
      fontSize: "22px",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    unfilled: {
      color: "#e4e5e9",
      fontSize: "22px",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "15px",
      }}
    >
      <div style={styles.star}>
        {[...Array(filledStars)].map((_, i) => (
          <span key={i} style={styles.filled}>
            ★
          </span>
        ))}

        {halfFilledStar && <span style={styles.halffiled}>★</span>}

        {[...Array(emptyStars)].map((_, i) => (
          <span key={i + filledStars} style={styles.unfilled}>
            {" "}
            ★
          </span>
        ))}
        <div
          style={{
            color: "#333333",
            height: "29px",
            width: "20px",
            paddingTop: "10px",
            fontSize: "15px",
            borderRight: "1px dotted gray",
            paddingRight: "3px",
          }}
        >
          {rating}
        </div>
      </div>
      <div style={{ borderRight: "1px dotted gray", paddingRight: "3px" }}>
        {ratingsCount} Ratings
      </div>
      <div style={{ borderRight: "1px dotted gray", paddingRight: "3px" }}>
        {wantToReadCount} Want to read
      </div>
      <div style={{ borderRight: "1px dotted gray", paddingRight: "3px" }}>
        {currentlyReadingCount} Currently reading
      </div>
      <div>{haveReadCount} Have read</div>
    </div>
  );
}
const BookDetails = (props) => {
  const { edition = "", classifications = "", idNumbers = "" } = props;
  // console.log(classifications);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {edition.length > 0 && (
        <div>
          <h3
            style={{
              margin: "0",
              paddingTop: "5px",
              paddingRight: "25px",
              fontFamily:
                '"Lucida Grande",Verdana,Geneva,Helvetica,Arial,sans-serif',
              color: "#666",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Edition Notes
          </h3>
          <p style={{ fontSize: "13px" }}>{edition}</p>
        </div>
      )}

      {classifications && (
        <div>
          <h3
            style={{
              margin: "0",
              paddingTop: "5px",
              paddingRight: "25px",
              fontFamily:
                '"Lucida Grande",Verdana,Geneva,Helvetica,Arial,sans-serif',
              color: "#666",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Classifications
          </h3>
          <ul>
            {classifications.map((classification) => (
              <li
                key={classification}
                style={{ fontSize: "13px", color: "#666" }}
              >
                {classification}
              </li>
            ))}
          </ul>
        </div>
      )}
      {idNumbers && (
        <div>
          <h3
            style={{
              margin: "0",
              paddingTop: "5px",
              paddingRight: "25px",
              fontFamily:
                '"Lucida Grande",Verdana,Geneva,Helvetica,Arial,sans-serif',
              color: "#666",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            ID Numbers
          </h3>
          <ul>
            {idNumbers.map((idNumber) => (
              <li key={idNumber} style={{ fontSize: "13px", color: "#666" }}>
                {idNumber}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
function BookInfor({ numberIdbook }) {
  console.log({ numberIdbook });

  const [Library, setLibrary] = useState([]);
  useEffect(() => {
    fetchDataGET(host + `/suggest.json`).then((res) => {
      setLibrary(res);
      console.log(res);
    });
  }, []);

  const [BookDetail, setBookDetail] = useState([]);
  useEffect(() => {
    fetchDataGET(host + `/book/${numberIdbook}/`).then((res) => {
      setBookDetail(res);
      console.log(res);
    });
  }, []);

  // Test star
  const data_star = {
    name_author: "Nguyen Thanh Son",
    rating: 3.7,
    ratingsCount: 116,
    wantToReadCount: 104,
    currentlyReadingCount: 133,
    haveReadCount: 123,
  };
  const tag2List = ["Emotional", "Angry ", "Strange "];

  const TagLists = [
    {
      hihi: tag2List,
      name: "mood",
    },
    {
      hihi: tag2List,
      name: "IMPRESSIONS",
    },
  ];
  // console.log(TagLists);
  const styles = {
    tab: {
      cursor: "pointer",
      paddingBottom: "10px",
      paddingTop: "20px",
      fontFamily: '"Lucida Grande",Verdana,Geneva,Helvetica,Arial,sans-serif',
      fontWeight: "500",
      display: "flex",
      borderBottom: "1px solid #ddd",
      alignItems: "center",
    },
    rule: {},
  };
  const [hoveredItems, setHoveredItems] = useState([]);

  const handleMouseEnter = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = true;
    setHoveredItems(newHoveredItems);
  };

  const handleMouseLeave = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = false;
    setHoveredItems(newHoveredItems);
  };

  const items = ["Details", "Other Books", "Comments"];
  const goDetails = useRef();
  const goOtherBook = useRef();
  const goComments = useRef();
  const goReview = useRef();
  // menuRef5.current = document.querySelector(".Book_content_3");
  // console.log(menuRef5);
  const [rating, setRating] = useState(0);

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
    // console.log(showMore);
  };
  const scrollToMyRef = (index) => {
    console.log(index);
    if (index === 0) {
      goDetails.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (index === 1) {
      goOtherBook.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (index === 2) {
      goComments.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (index === 3) {
      goReview.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
    <div>
      <div className="Book_infor_setting">
        <div className="Book_infor_content">
          <div className="Book_infor_content_setting">
            {/* {Library.map((slide, index) => (
            <Link to={`/bookInfor/${slide.pk}`}></Link>
          ))} */}

            <div className="Book_content_1">
              {/* <button onClick={scrollToMyRef}>Scroll to My Element</button> */}
              <img className="p1" src={BookDetail ? host + `${BookDetail.image}` : null} />
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
                  <img
                    className="p2"
                    src={book_icon_1}
                    onClick={() => scrollToMyRef(3)}
                  />
                </div>
                <img className="p2" src={book_icon_2} />
                <img className="p2" src={book_icon_3} />
              </div>
            </div>

            <div className="Book_content_2">
                <h1
                  key={numberIdbook}
                  style={{
                    fontFamily:
                      'Georgia,"Palatino Linotype","Book Antiqua",Palatino,serif',
                    margin: "10px 0 0",
                    color: "#333",
                    fontSize: "2em",
                  }}
                >
                  {BookDetail ? BookDetail.title : null}
                </h1>

              <div
                style={{
                  margin: "7px 2px 20px",
                  fontSize: "1em",
                  fontWeight: "400",
                  color: "#333",
                }}
              >
                Author by: {
                  BookDetail.authors ? BookDetail.authors.map((author, index) => (
                    <a
                      href={'/author/' + author.id}
                      key={index}
                    >
                      {author.name}
                    </a>
                  )) : null}
              </div>
              <div>
                <StarRating
                  rating={data_star.rating} 
                  ratingsCount={data_star.ratingsCount}
                  wantToReadCount={data_star.wantToReadCount}
                  currentlyReadingCount={data_star.currentlyReadingCount}
                  haveReadCount={data_star.haveReadCount}
                />
              </div>

              <div style={styles.tab}>
                <div
                  style={{
                    borderBottom: "2px solid #02598b",
                    color: "#02598b",
                    marginRight: "30px",
                  }}
                >
                  Overview
                </div>
                {items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      color: hoveredItems[index] ? "rgb(2, 89, 139)" : "grey",
                      borderBottom: hoveredItems[index]
                        ? "2px solid #02598b"
                        : "",
                      marginRight: "30px",
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => scrollToMyRef(index)}
                  >
                    {item}
                  </div>
                ))}
              </div>
                <div key={numberIdbook}>
                  {BookDetail ? (
                    <div>
                      <span>
                        {BookDetail.Description ? BookDetail.Description.slice(0, 300) : null}
                        {showMore ? (
                          <span>
                            {BookDetail.Description.slice(300)}
                            <a
                              onClick={handleShowMore}
                              style={{ color: "#02598b" }}
                            >
                              Read less
                            </a>
                          </span>
                        ) : (
                          <span>
                            ...
                            <a
                              onClick={handleShowMore}
                              style={{ color: "#02598b" }}
                            >
                              Read more
                            </a>
                          </span>
                        )}
                      </span>
                    </div>
                  ) : null}
                </div>
            </div>

            <div className="Book_content_2_2" ref={goDetails}>
              <h2
                style={{
                  margin: "0",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                  fontFamily:
                    '"Lucida Grande",Verdana,Geneva,Helvetica,Arial,sans-serif',
                  color: "#666",
                  fontWeight: "600",
                  fontSize: "1.375em",
                  borderBottom: "1px solid grey",
                }}
              >
                Book Details
              </h2>
              <BookDetails
                edition="Book 2"
                classifications={["Fiction", "Historical"]}
                idNumbers={["ISBN 978-3-16-148410-0", "OCLC 18292882"]}
              />
            </div>

            <div className="Book_content_3" ref={goOtherBook}>
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
            <div className="Book_content_4" ref={goReview}>
              <h3
                style={{
                  fontFamily: '"Arial", sans-serif',
                  color: "black",
                  // fontWeight: "600",
                  margin: "10px 0 10px 20px",
                  fontSize: "25px",
                }}
              >
                Community Reviews
              </h3>
              <ul>
                {TagLists.map((item1, index) => (
                  <li key={index}>
                    <ul>
                      <p>{item1.name}</p>
                      {item1.hihi.map((item, index) => (
                        <li key={index}> {item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="Book_content_5" ref={goComments}>
              {/* <Routes>
              <Route path="/bookInfor/jjj" element={<Comment />} />
            </Routes>  */}
              <Comment />
            </div>
          </div>
        </div>
      </div>
      <HeaderAll />
    </div>
  );
}

export default BookInfor;
