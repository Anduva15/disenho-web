import { Router } from 'express';

import cashier from '../controllers/cashier.js';

const router = Router();
const baseUrl = '/cashier';

router.get(`${baseUrl}s`, cashier.getAll);
router.get(`${baseUrl}/:id`, cashier.get);
router.post(baseUrl, cashier.create);
router.put(`${baseUrl}/:id`, cashier.update);
router.delete(`${baseUrl}/:id`, cashier.delete);

export default router;
