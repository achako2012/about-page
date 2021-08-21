import { Response, NextFunction } from "express";
import { CustomRequest } from "./types";
declare const middlewares: {
    requestTime: (req: CustomRequest, res: Response, next: NextFunction) => void;
    logger: (req: CustomRequest, res: Response, next: NextFunction) => void;
};
export default middlewares;
