import "./Product.css";
import { useLoaderData } from "react-router-dom";


function ProductInfo() {

    const { product } = useLoaderData();
    let {title, description, price} = product;

    return (
        <div className="productCard">
            <div className="productCard--info">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>price: {price}$</p>
            </div>
        </div>
    )
}

export default ProductInfo
