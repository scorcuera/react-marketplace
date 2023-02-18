import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import App from "../App";
import Product from "../components/Product";

import { productHandler } from "../handlers/productHandler";

const fetchProducts = async () => {
    const products = await productHandler.loadProducts();
    return { products };
}

const fetchProduct = async ({ params }) => {
    const product = await productHandler.loadProduct(params.id);
    return { product };
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "products",
                element: <App />,
                loader: fetchProducts,
            },
            {
                path: "products/products/:id",
                element: <Product />,
                loader: fetchProduct,
            },
        ],
    },
]);

export default router;