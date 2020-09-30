import React from 'react';
import { footerData } from '../data';


const Footer = () => {
    return (
        <footer className="footer w-100 text-center mt-auto py-3">
            <div className="container">
                <span className="text-muted">Made by Ahmed Ali Bhatti</span>
                <br />
                {
                    footerData.map(({ link, iconLink }, index) => (
                        <a
                            key={index}
                            className="link"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={iconLink} alt={iconLink} />
                        </a>
                    ))
                }
            </div>
        </footer>
    );
};

export default Footer;
