// products/routes.ts
import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/', controller.getPublished);
router.get('/featured', controller.getFeatured);
router.get('/:slug', controller.getProductWithCategories);
router.get('/:id/categories', controller.getCategory);
router.delete('/:id/delete', controller.deleteProduct);
router.post('/add', controller.postProduct);

export default router;
