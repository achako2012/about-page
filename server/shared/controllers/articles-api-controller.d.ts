import { CustomRequest } from "../types.js";
import { Response } from "express";
export declare const getArticles: (req: CustomRequest, res: Response) => Promise<void>;
export declare const createArticle: (req: CustomRequest, res: Response) => Promise<void>;
export declare const deleteArticle: (req: CustomRequest, res: Response) => Promise<void>;
