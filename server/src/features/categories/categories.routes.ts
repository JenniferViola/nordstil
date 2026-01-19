// products.routes.ts
import { Router } from 'express';
import * as controller from './categories.controller';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/:id/products', controller.getProducts);

export default router;
