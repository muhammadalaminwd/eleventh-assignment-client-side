import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <About></About>
        </div>
    );
};

export default Home;