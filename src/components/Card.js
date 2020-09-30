import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imgsrc, title, subtitle }) => {
    return (
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                    <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
