import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "../pages/Dashboard";
import ProductInfo from "../components/ProductInfo";
import EditProduct from "../pages/EditProduct";
import CreateProduct from "../pages/CreateProduct";
import { productService } from "../services/productService";
import { loadProduct } from "../utils/loadProduct";

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
                loader: loadProduct,
            },
            {
                path: "newProduct",
                element: <CreateProduct />,
            },
            {
                path: "editProduct/:id",
                element: <EditProduct />,
                loader: loadProduct
            },

        ],
    },
]);
