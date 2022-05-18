import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const ProductDetail = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    const {removeFromDom} = props;

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                navigate("/");
                removeFromDom(id);
            })
            .catch(err => err.json({ message: "Something went wrong", error: err }));
    }
    
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
            <button onClick={(e)=>deleteProduct(product._id)}>Delete</button>
        </div>
    )
}

export default ProductDetail;