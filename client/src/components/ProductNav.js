import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductNav = (props) => {
    const [products, setProducts] = useState([]); 


    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProducts(products.filter((product) => product._id !== id))
            })
            .catch(err => err.json({ message: "Something went wrong", error: err }));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
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
                                        <Link to ={`/product/${product._id}`}>{product.title}</Link>
                                        <button>
                                            <Link to={`/product/${product._id}/edit`}> Edit </Link>
                                        </button>
                                        <button onClick={(e)=>deleteProduct(product._id)}>Delete</button>
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