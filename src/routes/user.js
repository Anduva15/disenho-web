import { Router } from 'express';

import user from '../controllers/user.js';

const router = Router();
const baseUrl = '/user';

router.get(`${baseUrl}s`, user.getAll);
router.get(`${baseUrl}/:id`, user.get);
router.post(baseUrl, user.create);
router.put(`${baseUrl}/:id`, user.update);
router.delete(`${baseUrl}/:id`, user.delete);

export default router;
