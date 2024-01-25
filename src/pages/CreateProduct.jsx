import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import { convertToBase64 } from '../utils/convertToBase64';
import "./CreateProduct.css"

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            convertToBase64(file, setImage);
        }
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = { title, description, price, image };
        productHandler.addProduct(newProduct);
    };

    return (
        <form className="block--form" onSubmit={handleSubmit}>
            <div className="form--item form-image">
                <label htmlFor="image">Image</label>
                <input type="file" onChange={handleImageChange} />
            </div>
            <div className="form--item form-title">
                <label htmlFor="title">Title</label>
                <input name="title" type="text" onChange={handleTitleChange} />
            </div>
            <div className="form--item form-description">
                <label htmlFor="description">Description</label>
                <textarea name="description" type="text" onChange={handleDescriptionChange} />
            </div>
            <div className="form--item form-price">
                <label htmlFor="price">Price</label>
                <input name="price" type="text" onChange={handlePriceChange} />
            </div>
            <button className="form--submit-btn" type="submit">
                Upload
            </button>
        </form>
    );
};

export default CreateProduct;
