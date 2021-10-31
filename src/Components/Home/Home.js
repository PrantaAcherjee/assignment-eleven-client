import React from 'react';
import Banner from '../Banner/Banner';
import Cities from '../Cities/Cities';
import Footer from '../Footer/Footer';
import MobileApp from '../MobileAPP/MobileApp';
import Packages from '../Packages/Packages';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Cities></Cities>
            <MobileApp></MobileApp>
            <Footer></Footer>
        </div>
    );
};

export default Home;