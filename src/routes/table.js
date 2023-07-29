import { Router } from 'express';

import table from '../controllers/table.js';

const router = Router();
const baseUrl = '/table';

router.get(`${baseUrl}s`, table.getAll);
router.get(`${baseUrl}/:id`, table.get);
router.post(baseUrl, table.create);
router.put(`${baseUrl}/:id`, table.update);
router.delete(`${baseUrl}/:id`, table.delete);

export default router;
