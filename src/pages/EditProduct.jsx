import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import { convertToBase64 } from "../utils/convertToBase64";

function EditProduct() {
    const { product } = useLoaderData();
    const id = product.id;
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [image, setImage] = useState(product.image);

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
        let updatedProduct = {title, description, price, image};
        productHandler.updateProduct(id, updatedProduct);
    };

    return (
        <>
            <h1>estás editando el product: {product.title}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input type="file" onChange={handleImageChange} />
                <label htmlFor="title">Title</label>
                <input name="title" type="text" onChange={handleTitleChange} placeholder={product.title} />
                <label htmlFor="description">Description</label>
                <input name="description" type="text" onChange={handleDescriptionChange} placeholder={product.description} />
                <label htmlFor="price">Price</label>
                <input name="price" type="text" onChange={handlePriceChange} placeholder={product.price}/>
                <button type="submit">
                    Upload
                </button>
            </form>
        </>
    )
}

export default EditProduct;