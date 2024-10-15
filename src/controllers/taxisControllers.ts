// taxiController.ts
import { Request, Response } from 'express';
import { getTaxis } from '../models/taxisModel';

export const getAllTaxis = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const plate = req.query.plate as string;

        if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1) {
            res.status(400).json({ error: 'Página o límite inválido' });
            return;
        }

        const taxis = await getTaxis(page, limit, plate);

        if (taxis.length === 0) {
            res.status(404).json({ error: 'Página no encontrada' });
            return;
        }

        res.json(taxis);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al obtener los registros de taxis' });
    }
};
