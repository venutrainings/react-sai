import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-1520x800.png" alt="" className="home_img" />
        <div className="home-row">
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
