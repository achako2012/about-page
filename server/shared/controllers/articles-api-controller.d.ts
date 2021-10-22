import { CustomRequest } from "../types.js";
import { Response } from "express";
export declare const getArticles: (req: CustomRequest, res: Response) => Promise<void>;
export declare const getArticleById: (req: CustomRequest, res: Response) => Promise<void>;
export declare const updateArticleById: (req: CustomRequest, res: Response) => Promise<void>;
export declare const createArticle: (req: CustomRequest, res: Response) => Promise<void>;
export declare const deleteArticleById: (req: CustomRequest, res: Response) => Promise<void>;
