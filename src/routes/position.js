import { Router } from 'express';

import position from '../controllers/position.js'

const router = Router();
const baseUrl = '/position';

router.get(`${baseUrl}s`, position.getAll);
router.get(`${baseUrl}/:id`, position.get);
router.post(baseUrl, position.create);
router.put(`${baseUrl}/:id`, position.update);
router.delete(`${baseUrl}/:id`, position.delete);

export default router;