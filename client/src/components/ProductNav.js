import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductNav = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products);

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                products ? (
                    <div>
                        {
                            products.map((product, index) => {
                                return (
                                    <div key={index}>
                                        {/* </div><a href=`http://localhost:8000/api/product/$(product._id)s`>{product.title}</a> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : "loading..."
            }
        </div>
    )
};

export default ProductNav;