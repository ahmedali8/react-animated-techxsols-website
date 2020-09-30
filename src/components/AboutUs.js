import React from 'react';
import Common from './Common';

import { aboutSvgData } from '../data';


const AboutUs = () => {
    return (
        <>
            <Common 
                title="About "
                subtitle="We are your one stop-solution in the world of digital complexion. Our dedicated team offers best output for our client's inspiration that assist them out in getting online success for their future. Our enchanting services include Graphic Designing, Web development, App development, content writing and digital marketing that serves to be a masterpiece for all."
                svgData={aboutSvgData}
                linkTo="/about-us"
                btnName="Contact"
            />
        </>
    );
};

export default AboutUs;
