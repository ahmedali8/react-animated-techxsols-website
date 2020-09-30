import React from 'react';
import { Link } from 'react-router-dom';


const Common = ({ title, subtitle, svgData, linkTo, btnName }) => {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto my-auto">
                        <div className="row">
                            <div className="col-11 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                                <h1>
                                    {title}
                                    <strong className="brand-name"> TechXSols </strong>
                                </h1>
                                <h2 className="my-3">
                                    {subtitle}
                                </h2>
                                <div className="mt-3">
                                    <Link to={linkTo} className="btn-get-started">
                                        {btnName}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-11 col-lg-6 order-1 order-lg-2 header-img">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
                                    <div className="carousel-inner">
                                        {
                                            svgData.map(({ svgsrc, active }, index) => (
                                                <div key={index} className={`carousel-item  ${ active}`}>
                                                    <img src={svgsrc} className="d-block w-100" alt={svgsrc} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Common;
