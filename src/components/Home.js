import React from 'react';
import Common from './Common';

import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
import { homeSvgData } from '../data';


const Home = () => {

    const { ref } = useWebAnimations({ ...fadeIn });

    return (
        <div ref={ref}>
            <Common
                title="Grow your business with"
                subtitle="We are your one stop-solution in the world of digital complexion. Our dedicated team offers best output for our client's inspiration that assist them out in getting online success for their future."
                svgData={homeSvgData}
                linkTo="/services"
                btnName="Services"
            />
        </div>
    );
};

export default Home;
