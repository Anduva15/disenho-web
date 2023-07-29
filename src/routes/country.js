import { Router } from 'express';

import country from '../controllers/country.js'

const router = Router();
const baseUrl = '/country';

router.get(`${baseUrl}s`, country.getAll);
router.get(`${baseUrl}/:id`, country.get);
router.post(baseUrl, country.create);
router.put(`${baseUrl}/:id`, country.update);
router.delete(`${baseUrl}/:id`, country.delete);

export default router;