import React, { useEffect, useState } from 'react';
import DisplayProduct from '../DisplayProduct/DisplayProduct';

const DisplayProducts = () => {

    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch("https://fast-wave-21808.herokuapp.com/products")
        .then(res=>res.json())
        .then(data => setDisplayProducts(data))
    }, [])

    return (
        <div id="displayProducts" className="mb-5 mt-4">
            <h3 className="mb-5" style={{ borderBottom: '2px solid #ff871d' , paddingBottom: '10px', display: 'inline-block'}}>OUR BEST SELLER</h3>

            <div className="offerings-container container row text-start" style={{marginLeft:'auto', marginRight:'auto'}}>
                {
                    displayProducts.slice(0,6).map(product => <DisplayProduct
                        key={product._id}
                        displayProducts={product}>

                    </DisplayProduct> 
                        
                    )
                }
            </div>

            
        </div>
    );
};

export default DisplayProducts;