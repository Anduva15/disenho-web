
import { Router } from 'express';


import { createLogin } from '../controllers/login.js';
const router = Router();
const baseUrl = '/login';


router.post(baseUrl, createLogin);

export default router;
