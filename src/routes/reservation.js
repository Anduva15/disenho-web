import { Router } from 'express';

import reservation from '../controllers/reservation.js';

const router = Router();
const baseUrl = '/reservation';

router.get(`${baseUrl}s`, reservation.getAll);
router.get(`${baseUrl}/:id`, reservation.get);
router.post(baseUrl, reservation.create);
router.put(`${baseUrl}/:id`, reservation.update);
router.delete(`${baseUrl}/:id`, reservation.delete);

export default router;
