import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/products', router);
    router.get('/', indexController.getProducts.bind(indexController));
    router.post('/', indexController.createProduct.bind(indexController));
}