import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, price, image, description);
    };
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;