import { Router } from 'express';

import measurementUnit from '../controllers/measurementUnit.js'

const router = Router();
const baseUrl = '/measurementUnit';

router.get(`${baseUrl}s`, measurementUnit.getAll);
router.get(`${baseUrl}/:id`, measurementUnit.get);
router.post(baseUrl, measurementUnit.create);
router.put(`${baseUrl}/:id`, measurementUnit.update);
router.delete(`${baseUrl}/:id`, measurementUnit.delete);

export default router;