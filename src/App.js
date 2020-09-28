import React from 'react';
import { NavBar, Home, Services, AboutUs, ContactUs, Footer, NotFound } from './components';
import { Routes, Route } from 'react-router-dom';

function App () {
    return (
        <div className="app">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
