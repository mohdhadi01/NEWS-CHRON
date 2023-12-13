import React, { useRef } from "react";
import "../NEWS/MainNews.css";
import DateLogo from "../Assets/DateLogo.png";
import next from "../Assets/nextArrow.png";
import previous from "../Assets/previousLogo.png";

function MainNews(props) {

    const newsList = props.passJsonData;
    const refHii = useRef(null);
    const scrollLength = "58";
    let currentvalue =0;

  function ShiftNews(){
    let translatedistance = -currentvalue * scrollLength;
    refHii.current.style.transform = `translateY(${translatedistance}vh)`;
    
  }
  function nextClick(){
    if (currentvalue < newsList.length - 50){
    currentvalue++
    ShiftNews()
  }
    // console.log("next Clicked")
  }
  function prevClick(){
    if(currentvalue>0){
    currentvalue--
    ShiftNews()
  }
    // console.log("prev Clicked")
  }



  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="hii" ref={refHii}>
      {newsList.map((news, i) => {
        if (news.title != null && news.urlToImage != null) {
          return (
            <>
              <div className="mainScreen">
                <img
                  className="mainImage"
                  key={i}
                  src={news.urlToImage}
                  alt=""
                />
                ;
                <div className="details">
                  <div className="heading">
                    <h5 className="Date">
                      {" "}
                      <img className="DateLogo" src={DateLogo} alt="" />
                      {formatDate(news.publishedAt)}
                    </h5>
                    <h5 className="author">
                      {news.author} <br />
                      --Author
                    </h5>
                  </div>
                  <div className="textDetail">
                    <h2 className="title">{news.title}"</h2>
                    <p className="Description">{news.content}</p>
                  </div>
                  <div className="control">
                    <img
                      onClick={prevClick}
                      className="prev"
                      src={previous}
                      alt=""
                    />
                    <img
                      onClick={nextClick}
                      className="next"
                      src={next}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default MainNews;
