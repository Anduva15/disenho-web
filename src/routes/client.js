import { Router } from 'express';

import client from '../controllers/client.js'

const router = Router();
const baseUrl = '/client';

router.get(`${baseUrl}s`, client.getAll);
router.get(`${baseUrl}/:id`, client.get);
router.post(baseUrl, client.create);
router.put(`${baseUrl}/:id`, client.update);
router.delete(`${baseUrl}/:id`, client.delete);

export default router;