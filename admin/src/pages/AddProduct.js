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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 p-2 rounded-lg" />
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-gray-300 p-2 rounded-lg" />
                <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} className="border border-gray-300 p-2 rounded-lg" />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 p-2 rounded-lg" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;