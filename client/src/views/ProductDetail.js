import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const ProductDetail = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.product);

                })
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <Link to ={"/"}>Home</Link>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
    
export default ProductDetail;