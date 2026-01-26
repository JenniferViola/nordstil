// api/index.ts
import { Router } from 'express';
import productsRoutes from '../features/products/routes';
import categoryRoutes from '../features/categories/routes';
import heroRoutes from '../features/hero/routes';
import spotsRoutes from '../features/spots/routes';

const router = Router();

router.use('/products', productsRoutes);
router.use('/categories', categoryRoutes);
router.use('/hero', heroRoutes);
router.use('/spots', spotsRoutes);

export default router;
