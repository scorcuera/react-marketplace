import "./Product.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useLoaderData } from "react-router-dom";


function Product({ data }) {
    let productInfo = data;
    if (!productInfo) {
        const { product } = useLoaderData();
        productInfo = Object.values(product);
    }

    let productTitle = productInfo[0];
    let productDescription = productInfo[1];
    let productPrice = productInfo[2];

    // how can we improve this ?

    return (
        <div className="productCard">
            <div className="productCard--info">
                <h1>{productTitle}</h1>
                <p>{productDescription}</p>
                <p>price: {productPrice}$</p>
            </div>
            <div className="productCard--buttons">
                <DeleteIcon fontSize="large" />
                <EditIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Product
