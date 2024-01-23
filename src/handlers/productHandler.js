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
    updateProduct(id, updatedProduct){
        if (!updatedProduct) {
            return;
        }

        let updatedProductStructure = {
            "title": updatedProduct.title,
            "description": updatedProduct.description,
            "price": updatedProduct.price,
            "image": updatedProduct.image
        }

        return productService.updateProduct(id, updatedProductStructure);
    }
}