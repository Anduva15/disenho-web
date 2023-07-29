import { Router } from 'express';

import report from '../controllers/report.js';

const router = Router();
const baseUrl = '/report';

router.get(`${baseUrl}s`, report.getAll);
router.get(`${baseUrl}/:id`, report.get);
router.post(baseUrl, report.create);
router.put(`${baseUrl}/:id`, report.update);
router.delete(`${baseUrl}/:id`, report.delete);

export default router;
