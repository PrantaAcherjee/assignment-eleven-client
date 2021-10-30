import React from 'react';
import Banner from '../Banner/Banner';
import Cities from '../Cities/Cities';
import Footer from '../Footer/Footer';
import Packages from '../Packages/Packages';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Cities></Cities>
            <Footer></Footer>
        </div>
    );
};

export default Home;