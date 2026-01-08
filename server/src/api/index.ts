// api/index.ts
import { Router } from 'express';
import productsRoutes from '../features/products/products.routes';
import heroRoutes from '../features/hero/hero.routes';
import spotsRoutes from '../features/spots/spots.routes';

const router = Router();

router.use('/products', productsRoutes);
router.use('/hero', heroRoutes);
router.use('/spots', spotsRoutes);

export default router;
