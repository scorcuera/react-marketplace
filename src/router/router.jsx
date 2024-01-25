import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "../pages/Dashboard";
import ProductInfo from "../components/ProductInfo";
import EditProduct from "../pages/EditProduct";
import CreateProduct from "../pages/CreateProduct";
import { productService } from "../services/productService";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                loader: productService.getProducts
            },
            {
                path: "/products",
                element: <Dashboard />,
                loader: productService.getProducts
            },
            {
                path: "products/:id",
                element: <ProductInfo />,
                loader: fetchProduct,
            },
            {
                path: "newProduct",
                element: <CreateProduct />,
            },
            {
                path: "editProduct/:id",
                element: <EditProduct />,
                loader: fetchProduct
            },

        ],
    },
]);

async function fetchProduct({ params }) {
    const product = await productService.getProduct(params.id);
    return { product };
}
