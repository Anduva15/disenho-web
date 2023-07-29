import { Router } from 'express';

import brand from '../controllers/brand.js';

const router = Router();
const baseUrl = '/brand';

router.get(`${baseUrl}s`, brand.getAll);
router.get(`${baseUrl}/:id`, brand.get);
router.post(baseUrl, brand.create);
router.put(`${baseUrl}/:id`, brand.update);
router.delete(`${baseUrl}/:id`, brand.delete);

export default router;
