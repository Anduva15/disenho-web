import { Router } from 'express';

import employee from '../controllers/employee.js'

const router = Router();
const baseUrl = '/employee';

router.get(`${baseUrl}s`, employee.getAll);
router.get(`${baseUrl}/:id`, employee.get);
router.post(baseUrl, employee.create);
router.put(`${baseUrl}/:id`, employee.update);
router.delete(`${baseUrl}/:id`, employee.delete);

export default router;