import { Router } from 'express';

import * as UserController from './controllers/user';
import * as AuthController from './controllers/auth';
import * as TodoController from './controllers/todo';

export const router = Router();

// Auth routes
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

// User routes
router.get('/user/all', UserController.all);

// Todo Routes
router.get('/todos', TodoController.todos);
router.post('/todos', TodoController.createTodo);
router.get('/todos/:id', TodoController.todo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);