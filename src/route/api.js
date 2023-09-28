import express from "express";
import userController from "../controller/user-controller.js";
import productController from "../controller/product-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User API
userRouter.get('/api/users/current', userController.get);
userRouter.delete('/api/users/logout', userController.logout);

// Product API
userRouter.post('/api/products', productController.create);
userRouter.put('/api/products/:productId', productController.update);

export {
    userRouter
}