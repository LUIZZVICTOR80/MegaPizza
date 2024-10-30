import { Router } from 'express';
import pizzaController from '../controllers/pizzaController.js';
import { verifyToken } from '../verifyToken.js';

const router = Router();

router.post('/', verifyToken, pizzaController.create);
router.get('/', verifyToken, pizzaController.getAll);
router.get('/:id', verifyToken, pizzaController.getById);
router.put('/:id', verifyToken, pizzaController.update);
router.delete('/:id', verifyToken, pizzaController.remove);

export default router;
