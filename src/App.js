import React from 'react';
import './App.css';
import { NavBar, Home, Services, AboutUs, ContactUs, Footer, NotFound } from './components';
import { Routes, Route } from 'react-router-dom';

import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {

    const { ref } = useWebAnimations({
        ...fadeIn,
        timing: {
            duration: 2000
        }
    });

    return (
        <div className="app" ref={ref}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
