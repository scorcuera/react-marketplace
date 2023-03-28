import { useState } from "react";

const ProductCart = ({ product, getTotal }) => {
    let [quantity, setQuantity] = useState(1);

    const addItem = () => {
        setQuantity(++quantity);
        getTotal(quantity * product.price);
    }

    const removeItem = () => {
        setQuantity(--quantity);
        getTotal(quantity * product.price);
    }

    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}€</p>
            <button onClick={() => addItem()}>+</button>
            {quantity}
            <button onClick={() => removeItem()}>-</button>
        </div>
    )
}

export default ProductCart
