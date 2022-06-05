import React, { Component } from "react";
import Contact from "../pages/Public/Contact/Contact";
import Footer from "../pages/Public/Footer/Footer";
import Header from "../pages/Public/Header/Header";
import Hero from "../pages/Public/Hero/Hero";
import Products from "../pages/Public/Product/Products";
import Services from "../pages/Public/Services/Services";

class PublicLandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Services />
        <Products />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default PublicLandingPage;
