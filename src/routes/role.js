import { Router } from 'express';

import role from '../controllers/role.js';

const router = Router();
const baseUrl = '/role';

router.get(`${baseUrl}s`, role.getAll);
router.get(`${baseUrl}/:id`, role.get);
router.post(baseUrl, role.create);
router.put(`${baseUrl}/:id`, role.update);
router.delete(`${baseUrl}/:id`, role.delete);

export default router;
