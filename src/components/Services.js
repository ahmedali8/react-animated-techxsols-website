import React, { useEffect } from 'react';
import { imgData } from '../data/index';
import Card from './Card';

import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";


const Services = () => {

    const { ref } = useWebAnimations({
        ...fadeIn,
        timing: {
            duration: 4000
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services" ref={ref}>
            <div className="services my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto">
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
        </div>
    );
};

export default Services;
