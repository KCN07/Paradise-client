import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fast-wave-21808.herokuapp.com/products")
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div id="Products" className="mb-5 mt-4">

            <div className="products-container container row text-start" style={{marginLeft:'auto', marginRight:'auto'}}>
                {
                    products.map(product => <Product
                        key={product._id}
                        displayProducts={product}>

                    </Product> 
                        
                    )
                }
            </div>

            
        </div>
    );
};

export default Products;