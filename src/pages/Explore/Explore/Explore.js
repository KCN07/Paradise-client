import React from 'react';
import ExploreBanner from '../ExploreBanner/ExploreBanner';
import Products from '../Products/Products';

const Explore = () => {
    return (
        <div id="explore">
            <ExploreBanner></ExploreBanner>
            <Products></Products>
        </div>
    );
};

export default Explore;