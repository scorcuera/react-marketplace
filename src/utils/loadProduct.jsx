import { productService } from "../services/productService";

export async function loadProduct({ params }) {
    const product = await productService.getProduct(params.id);
    return { product };
}
