import { Router } from 'express';
import { getHero } from './controller';

const router = Router();

router.get('/', getHero);

export default router;
