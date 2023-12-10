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

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric'};
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

  return (
    <div className='mainbox'>
        {newsDetail.map((news)=>{
            if(news.title!=null && news.urlToImage!=null){

                const titleWords = news.title.split(' ');
                const shortTitle = titleWords.slice(0, 7).join(' ');

            return(
                <>
                <div className="news-box" onClick={handleClick}>
                    <img className='news-box-image' src={news.urlToImage} alt="news.title" />
                    <div className='news-box-title'>  
                            <div className="heading-line">
                                <h5>{news.author}</h5>
                                <h5>{formatDate(news.publishedAt)}</h5>
                            </div>
                        <p>{shortTitle}...</p>
                    </div>
                </div>
                </>
            )}else {
                return null;
            }
        })}
        
    </div>
  )
}

export default NewsCatalog