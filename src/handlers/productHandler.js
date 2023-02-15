import { productService } from "../services/productService";

export const productHandler = {
    addProduct(newProduct){
        // pending to be completed
    },
    loadProducts(){
        return productService.getProducts();
    },
    loadProduct(id) {
        return productService.getProduct(id);
    },
    deleteProduct(id){
        return productService.deleteProduct(id);
    },
    updateProduct(newProduct){
        // pending to be completed
    }
}