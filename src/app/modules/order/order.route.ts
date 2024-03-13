import express from 'express';


import { orderController } from './order.controller';


const router = express.Router();

router.post(
  '/create-order',
  orderController.createOrder,
);
router.get('/get-all-orders/', orderController.getAllOrders);
router.get('/get-single-order/:id', orderController.getSingleOrder);
// router.put(
//   '/product/:productId',
//   validateRequest(ProductValidation.updateProductValidation),
//   ProductController.updateProduct,
// );
// router.get('/show-orders/', orderController.getSingleOrder);
//for stripe

router.post('/create-checkout-session')

// router.delete('/product/:productId', ProductController.deleteProduct);

export const orderRoute = router;