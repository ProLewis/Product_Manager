import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
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

export default ProductForm;