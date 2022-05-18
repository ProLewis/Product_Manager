import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductEdit = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
                })
            .catch(err => console.error(err));
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}/edit`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log("Response: ", res);
                navigate("/");
            })
                
            
            .catch(err => console.log("Error: ", err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <Link to ={"/"}>Home</Link>
            <div>
                <label>Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div>
                <label>Price: </label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>
            <input type="submit"></input>
        </form>
    )
};

export default ProductEdit;