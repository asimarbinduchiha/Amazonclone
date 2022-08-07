import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Spotlight/eng_pc11.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id={123456}
          title="The Lean StartUp"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/718wzK6mymL.jpg"
          rating={2}
        />
        <Product
          id={1234567}
          title="Goa Trip"
          price={1000.99}
          image="https://5.imimg.com/data5/YG/CZ/QH/GLADMIN-67378178/selection-034-500x500.png"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={12345678}
          title="The Dubai Trip"
          price={20000}
          image="https://3.imimg.com/data3/FQ/XS/MY-10398529/dubai-tour-500x500.jpg"
          rating={5}
        />
        <Product
          id={123456789}
          title="The Maldives Trip"
          price={2000}
          image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/maldives-travel-tips-cover.jpg"
          rating={5}
        />
        <Product
          id={12345698}
          title="The Canada Trip"
          price={1000000}
          image="https://www.planetware.com/photos-large/CDN/canada-itineraries-moraine-lake.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={12345698}
          title="The Malaysia Trip"
          price={500000000}
          image="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/malaysia-cover.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
