// categories/routes.ts
import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id/delete', controller.deleteCategory);
router.get('/:id/products', controller.getProducts);

export default router;
