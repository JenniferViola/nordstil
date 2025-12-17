// products.routes.ts
import { Router } from 'express';
import { getPublished, getPublishedBySlug } from './products.controller';

const router = Router();

router.get('/', getPublished);

router.get('/:slug', getPublishedBySlug);

export default router;
