import React from 'react'
import "../NEWS/NewsCatalog.css"

function NewsCatalog(props) {
    const newsDetail=props.passJsonData;

    function handleClick(news){
        newsDetail.map(()=>{
            return(
                <div>
                    <img src={news.urlToImage} alt="" />
                </div>
            )
        })
    }


  return (
    <div className='mainbox'>
        {newsDetail.map((news)=>{
            return(
                <div className="news-box" onClick={handleClick}>
                    <img className='news-box-image' src={news.urlToImage} alt="" />
                    <div className='news-box-title'>
                <p>{news.title}</p>
                </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default NewsCatalog