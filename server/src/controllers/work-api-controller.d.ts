import { CustomRequest } from "../types.js";
import { Response } from "express";
export declare const getAll: (req: CustomRequest, res: Response) => Promise<void>;
export declare const create: (req: CustomRequest, res: Response) => Promise<void>;
export declare const deleteWorkById: (req: CustomRequest, res: Response) => Promise<void>;
