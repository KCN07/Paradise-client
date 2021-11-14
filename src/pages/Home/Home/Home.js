import React from 'react';
import Banner from '../Banner/Banner';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Review from '../Review/Review';
import Sale from '../Sale/Sale';
// import Rating from  '../Rating/Rating';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <Review></Review>
            <Sale></Sale>
            
        </div>
    );
};

export default Home;