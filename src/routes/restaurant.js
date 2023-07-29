import { Router } from 'express';

import restaurant from '../controllers/restaurant.js';

const router = Router();
const baseUrl = '/restaurant';

router.get(`${baseUrl}s`, restaurant.getAll);
router.get(`${baseUrl}/:id`, restaurant.get);
router.post(baseUrl, restaurant.create);
router.put(`${baseUrl}/:id`, restaurant.update);
router.delete(`${baseUrl}/:id`, restaurant.delete);

export default router;
