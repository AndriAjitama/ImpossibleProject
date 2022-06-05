import React, { Component } from "react";
import Header from "../pages/Users/PageUser/Header";
import Contact from "../pages/Public/Contact/Contact";
import Footer from "../pages/Public/Footer/Footer";
import Hero from "../pages/Public/Hero/Hero";
import Products from "../pages/Public/Product/Products";
import Services from "../pages/Public/Services/Services";
class UserLandingPage extends Component {
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

export default UserLandingPage;
