import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MakeOrder from '../MakeOrder/MakeOrder';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MakeOrder></MakeOrder>

        </div>
    );
};

export default Home;