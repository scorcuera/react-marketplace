import "./Product.css";
import { Link } from 'react-router-dom';

function Product({ product, deleteProduct }) {

    const { id, title, price, image } = product;

    return (
        <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={image} alt={title} className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{price}€</p>
            <Link to={`/editProduct/${product.id}`}>
                <button>Edit</button>
            </Link>
            <Link to={`/products/${product.id}`}>
                <button>More info</button>
            </Link>
            <button onClick={() => deleteProduct(id)}>Delete</button>
        </a>
    )
}

export default Product
