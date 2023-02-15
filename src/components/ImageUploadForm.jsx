import React, { useState } from 'react';
import { productHandler } from '../handlers/productHandler';

const ImageUploadForm = () => {
    const [imageData, setImageData] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageData(reader.result);
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        productHandler.addProduct(imageData);
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
