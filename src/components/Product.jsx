import "./Product.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Product({ product, deleteProduct }) {

    const { id, title, price, image } = product;

    return (
        <a href="#" className="flex flex-col min-h-2/4 bg-teal-50 rounded-lg drop-shadow-md">
            <div className="h-64 bg-gray-100">
                <img src={image} alt={title} className="object-cover h-64 w-full rounded-lg drop-shadow-sm mix-blend-multiply" />
            </div>
            <h3 className="mt-4 text-2xl text-gray-800 font-light px-3">{title}</h3>
            <p className="mt-1 text-md font-light text-gray-800 px-3">{price}€</p>
            <div className="flex justify-around py-10">
                <div className="flex justify-start">
                    <Link to={`/editProduct/${product.id}`}>
                        <FaEdit size={"2rem"} className="mx-3" />
                    </Link>
                    <MdDelete onClick={() => deleteProduct(id)} size={"2rem"} className="mx-3" />
                </div>
                <Link to={`/products/${product.id}`}>
                    <button className="text-lg text-gray-800 font-light">More info</button>
                </Link>
            </div>
        </a>
    )
}

export default Product
