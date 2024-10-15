// taxiModel.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTaxis = async (page: number, limit: number, plate?: string) => {
    return await prisma.taxis.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: plate ? {
            plate: {
                startsWith: plate,
                mode: 'insensitive',
            },
        } : undefined,
        select: {
            id: true,
            plate: true,
        },
    });
};
