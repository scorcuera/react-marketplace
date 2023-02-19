import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "../pages/Dashboard";
import ProductInfo from "../components/ProductInfo";
import Home from "../pages/Home";

import { productHandler } from "../handlers/productHandler";
import CreateProduct from "../pages/CreateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "products",
                element: <Dashboard />,
                loader: fetchProducts,
            },
            {
                path: "products/products/:id",
                element: <ProductInfo />,
                loader: fetchProduct,
            },
            {
                path: "newProduct",
                element: <CreateProduct />,
            },
            {
                path: "homepage",
                element: <Home />,
            },
        ],
    },
]);

async function fetchProducts() {
    const products = await productHandler.loadProducts();
    return { products };
}

async function fetchProduct({ params }) {
    const product = await productHandler.loadProduct(params.id);
    return { product };
}
