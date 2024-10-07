// import {getTaxis} from "../models/taxisModel";
import { Request,Response } from "express";

export const  taxisControllers= async (req: Request, res:Response) => {
    try {
        const {plate, page = 1, limit = 10} = req.query;

        const pageNumber = parseInt(page as string, 10);
        const limitNumber = parseInt(limit as string, 10);

        const taxis = await getTaxis
    }
}