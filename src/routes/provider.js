import { Router } from 'express';

import provider from '../controllers/provider.js';

const router = Router();
const baseUrl = '/provider';

router.get(`${baseUrl}s`, provider.getAll);
router.get(`${baseUrl}/:id`, provider.get);
router.post(baseUrl, provider.create);
router.put(`${baseUrl}/:id`, provider.update);
router.delete(`${baseUrl}/:id`, provider.delete);

export default router;
