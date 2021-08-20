import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="The Introvert’s Edge to Networking: Work the Room. Leverage Social Media. Develop Powerful Connections"
          price={11.22}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/713qhtEOq5L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="12345"
          title="Crocs Men's and Women's Classic Clog"
          price={21.22}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/618UAoZPlNL._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="232"
          title="Fruit of the Loom Men's Coolzone Boxer Briefs"
          price={11.22}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81g0ghf-QaL._AC_UL320_SR240,320_.jpg"
        />
        <Product
          id="12345"
          title="The Introvert’s Edge to Networking: Work the Room. Leverage Social Media. Develop Powerful Connections"
          price={11.22}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/713qhtEOq5L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="12345"
          title="$10 Nintendo eShop Gift Card [Digital Code]"
          price={11.22}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71g8qy0R8zL._AC_UL480_SR309,480_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="232"
          title="50Pcs Kids Face Mask Disposable 3 Ply Safety Face Mask,4-12 Children Face Mask (50 Pcs, Black)"
          price={11.22}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71pFnYrsIXL._AC_UL320_SR320,320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
