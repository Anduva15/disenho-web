import { Router } from 'express';

import account from '../controllers/bill.js';

const router = Router();
const baseUrl = '/bill';

router.get(`${baseUrl}s`, account.getAll);
router.get(`${baseUrl}/:id`, account.get);
router.post(baseUrl, account.create);
router.put(`${baseUrl}/:id`, account.update);
router.delete(`${baseUrl}/:id`, account.delete);

export default router;
