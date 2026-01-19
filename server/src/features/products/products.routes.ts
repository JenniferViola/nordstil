// products.routes.ts
import { Router } from 'express';
import * as controller from './products.controller';

const router = Router();

router.get('/', controller.getPublished);
router.get('/:slug', controller.getPublishedBySlug);
router.get('/:id/categories', controller.getCategory);

export default router;
