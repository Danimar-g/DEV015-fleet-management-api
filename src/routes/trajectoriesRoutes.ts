import { Router } from 'express';
import { getAllTrajectories } from '../controllers/trajectoriesControllers';

const router: Router = Router();

// Ruta para obtener todas las trayectorias
router.get('/', getAllTrajectories);

export default router;