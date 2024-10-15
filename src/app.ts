import express, { Application, Request, Response } from 'express';
import {PrismaClient } from '@prisma/client';
import taxisRoutes from './routes/taxisRoutes';
import trajectoriesRoutes from './routes/trajectoriesRoutes';

const app: Application = express();
const prisma = new PrismaClient();
const PORT: number = 5000;


app.use(express.json());

app.use('/taxis', taxisRoutes);
app.use('/trajectories', trajectoriesRoutes);



app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});