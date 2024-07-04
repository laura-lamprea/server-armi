import { NextFunction, Request, Response } from "express";
import ProductService from "../application/productService";

const listProducts = (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = ProductService.listProducts();        
        res.status(200).send({ message: "success", data: products });
    } catch (error) {    
        res.status(404).json({ message: 'ERROR_CANNOT_GET_PRODUCTS' });
        next(error);

    }
}

const addProductToCart = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId, quantity } = req.body;
        ProductService.addProductToCart(productId, quantity);
        res.status(201).send('Product added to cart');
    } catch (error) {
        res.status(404).json({ message: 'ERROR_CANNOT_ADD_PRODUCT' });
        next(error);

    }
};

const updateProductQuantity = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId, quantity } = req.body;
        ProductService.updateProductQuantity(productId, quantity);
        res.send('Product quantity updated');
    } catch (error) {
        res.status(404).json({ message: 'ERROR_CANNOT_UPDATE_QUANTITY' });
        next(error);
    }
};

const removeProductFromCart = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.body;
        ProductService.removeProductFromCart(productId);
        res.send('Product removed from cart');
    } catch (error) {
        res.status(404).json({ message: 'ERROR_CANNOT_REMOVE_PRODUCT' });
        next(error);
    }
};

const listCart = (req: Request, res: Response, next: NextFunction) => {
    try {
        const cart = ProductService.listCart();
        res.status(200).send({ message: "success", data: cart });
    } catch (error) {
        res.status(404).json({ message: 'ERROR_CANNOT_GET_CART' });
        next(error);
    }

}

export {
    listProducts,
    addProductToCart,
    updateProductQuantity,
    removeProductFromCart,
    listCart
};