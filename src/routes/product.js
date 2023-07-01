import { Router } from 'express';

import product from '../controllers/product.js';

const router = Router();
const baseUrl = '/product';

router.get(`${baseUrl}s`, product.getAll);
router.get(`${baseUrl}/:id`, product.get);
router.post(baseUrl, product.create);
router.put(`${baseUrl}/:id`, product.update);
router.delete(`${baseUrl}/:id`, product.delete);

export default router;
