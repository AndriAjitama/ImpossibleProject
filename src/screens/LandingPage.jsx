import React, { Component } from 'react'
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Products from '../components/Sections/Products';
import Services from '../components/Sections/Services';

class LandingPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header/>
                <Hero/>
                <Services/>
                <Products/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}
 
export default LandingPage;