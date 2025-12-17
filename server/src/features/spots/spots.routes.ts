// spots.routes.ts
import { Router } from 'express';
import { listSpots } from './spots.controller';

const router = Router();

router.get('/', listSpots);

export default router;
