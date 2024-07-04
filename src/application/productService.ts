import productRepository from '../domain/repositories/productRepository';

const ProductService = {
    listProducts: () => {
        return productRepository.getAllProducts();
    },
    addProductToCart: (productId: string, quantity: number) => {
        const cart = productRepository.getCart();
        cart[productId] = (cart[productId] || 0) + quantity;
        productRepository.saveCart(cart);
    },
    updateProductQuantity: (productId: string, quantity: number) => {
        const cart = productRepository.getCart();
        if (cart[productId]) {
            cart[productId] = quantity;
            productRepository.saveCart(cart);
        }
    },
    removeProductFromCart: (productId: string) => {
        const cart = productRepository.getCart();
        delete cart[productId];
        productRepository.saveCart(cart);
    }
}

export default ProductService;