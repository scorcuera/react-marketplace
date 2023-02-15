import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
    const [imageData, setImageData] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(URL.createObjectURL(file));
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageData(reader.result);
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:3000/products', {
            image: imageData,
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <button type="submit">
                Upload
            </button>
        </form>
    );
};

export default ImageUploadForm;
