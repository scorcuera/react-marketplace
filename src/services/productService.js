const API_URL = "http://localhost:3000/products";

export const productService = {
    async getProducts() {
        let response = await fetch(API_URL);
        let allProducts = await response.json();
        return allProducts;
    },
    async getProduct(id) {
        let response = await fetch(`${API_URL}/${id}`);
        let product = await response.json();
        return product;
    },
    async submitProduct(newProduct){
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })
    },
    async deleteProduct(id){
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
    },
    async updateProduct(id, updatedProduct){
        await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        })
    }
}