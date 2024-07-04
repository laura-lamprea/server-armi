import { Router } from "express";
import { listProducts, addProductToCart, updateProductQuantity, removeProductFromCart } from './productController'
const router = Router();


router.get('/products', listProducts);
router.post('/cart', addProductToCart);
router.put('/cart', updateProductQuantity);
router.delete('/cart', removeProductFromCart);

module.exports = router;