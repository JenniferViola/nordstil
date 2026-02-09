// orders/routes.ts
import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.post('/', controller.postOrder);
router.get('/all', controller.getAll);
router.get('/:id', controller.getOrder);

export default router;
