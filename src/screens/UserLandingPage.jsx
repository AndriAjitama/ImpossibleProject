import React, { Component } from "react";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Hero from "../components/Sections/Hero";
import Products from "../components/Sections/Products";
import Services from "../components/Sections/Services";
import Header from "../pages/Users/PageUser/Header";

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
