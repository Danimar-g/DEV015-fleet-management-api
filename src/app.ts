import express, { Application, Request, Response } from 'express';
import {PrismaClient } from '@prisma/client';

const app: Application = express();
const prisma = new PrismaClient();
const PORT: number = 3001;

app.use(express.json());
app.get('/', async (req: Request, res: Response): Promise<void> => {
    const taxis = await prisma.taxis.findMany() 
    res.json(taxis);
});
app.get('/taxis', async (req: Request, res: Response): Promise<void> => { 
    try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const plate = req.query.plate as string; 
    const taxis = await prisma.taxis.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: plate ? {
                plate:{
                    startsWith: plate,
                    mode: 'insensitive',
                },
            }:undefined,
            select:{
                id: true,
                plate:true,
            },
        });
        res.json(taxis);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros'})
    }
});
app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});