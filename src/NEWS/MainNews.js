import React, { useRef } from "react";
import "../NEWS/MainNews.css";
import DateLogo from "../Assets/DateLogo.png";
import next from "../Assets/nextArrow.png";
import previous from "../Assets/previousLogo.png";

function MainNews(props) {
  const newsList = props.passJsonData;
  const refImageList = useRef(null);
  const translatedistance = "48vw";
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  function prevNews(refImageList){
    refImageList.style.transform= `translateY(${translatedistance}vw)`
  }

  return (
    <div className="hii">
      {newsList.map((news, i) => {
        if (news.title != null && news.urlToImage != null) {
          return (
            <>
              <div className="mainScreen">
                <img
                ref={refImageList}
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
                    <img onClick={prevNews} className="prev" src={previous} alt="" />
                    <img  className="next" src={next} alt="" />
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
