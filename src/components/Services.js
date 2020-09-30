import React from 'react';
import { imgData } from '../data/index';
import Card from './Card';


const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                imgData.map(({ imgsrc, title, subtitle }, index) => (
                                    <Card
                                        key={index}
                                        imgsrc={imgsrc}
                                        title={title}
                                        subtitle={subtitle}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
