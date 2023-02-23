import { productService } from "../services/productService";

export const productHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductStructure = {
            "title": newProduct.title,
            "description": newProduct.description,
            "price": newProduct.price,
            "image": newProduct.image
        }

        return productService.submitProduct(newProductStructure);
        
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