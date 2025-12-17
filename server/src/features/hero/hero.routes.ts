import { Router } from 'express';
import { getHero } from './hero.controller';

const router = Router();

router.get('/', getHero);

export default router;
