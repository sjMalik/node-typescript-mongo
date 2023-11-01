import { Router } from 'express';

import * as UserController from './controllers/user';
import * as AuthController from './controllers/auth';

export const router = Router();

// Auth routes
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

// User routes
router.get('/user/all', UserController.all);