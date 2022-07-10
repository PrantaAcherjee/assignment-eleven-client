import React from 'react';
import Carosel from '../Carosel/Carosel';
import Cities from '../Cities/Cities';
import Footer from '../Footer/Footer';

import MobileApp from '../MobileAPP/MobileApp';
import Packages from '../Packages/Packages';
const Home = () => {
    return (
        <div>
           
            <Carosel></Carosel>
            <MobileApp></MobileApp>
            <Packages></Packages>
            <Cities></Cities>
            <Footer></Footer>
        </div>
    );
};

export default Home;