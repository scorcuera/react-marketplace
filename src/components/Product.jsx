import "./Product.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Product({ product }) {

    const { title, description, price } = product;

    return (
        <div className="productCard">
            <div className="productCard--info">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>price: {price}$</p>
            </div>
            <div className="productCard--buttons">
                <DeleteIcon fontSize="large" />
                <EditIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Product
