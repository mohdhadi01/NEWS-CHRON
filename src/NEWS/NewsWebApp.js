import React, { useEffect, useRef, useState } from "react";
import "../NEWS/NewsWebApp.css";
import logo from "../Assets/logo.png";
import search from "../Assets/search.png";
import NewsCatalog from "./NewsCatalog";

function NewsWebApp() {
  // const APIKEY="5918713a2aea4266bebf24647190aaf1";
  const [searchTerm, setSearchTerm] = useState("fifa");
  const apiURL = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-11-10&sortBy=publishedAt&apiKey=5918713a2aea4266bebf24647190aaf1`;
  const [newsList, setNewsList] = useState([]);
  const searchRef = useRef(null);
  const categoryRef=useRef(null);

  useEffect(() => {
    fetchAPI();
  }, [searchTerm]);

  async function fetchAPI() {
    try {
      const reponse = await fetch(apiURL);
      const jsonData = await reponse.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "Error Occured");
    }
  }

    function handleSearch(event){
      event.preventDefault();
      const searchValue=searchRef.current.value;
      setSearchTerm(searchValue)
    }


    function handleCategory(event){
      const selectedCategory=  event.target.value;
      console.log(selectedCategory)
      setSearchTerm(selectedCategory);
    }

  return (
    <div className="mainContainer">
      <div className="content-box">
        <header>
          <img className="logo" src={logo} alt="NEWS-CHRON" />
          <div className="searchRow">
            <h1>Latest News</h1>
            <div className="input-line">
                <form action="" onSubmit={handleSearch}>
                    <input className="search-bar" type="text" ref={searchRef} />
                </form>
              <img src={search} className="search-icon" alt="" onClick={handleSearch} />
            </div>
          </div>

          <div className="News-category">
                <button className="typeMenu" value="Politics" onClick={handleCategory}>Politics</button>
                <button className="typeMenu" value="Sports" onClick={handleCategory}>Sports</button>
  			    <button className="typeMenu" value="Business" onClick={handleCategory}>Business</button>
  			    <button className="typeMenu" value="Tech" onClick={handleCategory}>Tech</button>
  				<button className="typeMenu" value="Science" onClick={handleCategory}>Science</button>
  				<button className="typeMenu" value="Arts" onClick={handleCategory}>Arts</button>
  				<button className="typeMenu" value="health" onClick={handleCategory}>Health</button>
		 </div>

        </header>
        <main>
          <div className="desc-Box">
            
          </div>
          <div className="title-Box">
          <NewsCatalog passJsonData={newsList} />
          </div>
        </main>
        
      </div>
    </div>
  );
}

export default NewsWebApp;
