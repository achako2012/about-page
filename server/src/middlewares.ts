import colors from 'colors'
import {Response, NextFunction} from "express";
import {CustomRequest} from "./types";


const requestTime = (req: CustomRequest, res: Response, next: NextFunction) => {
    req.requestTime = Date.now()
    next()
}

const logger = (req: CustomRequest, res: Response, next: NextFunction) => {
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`))
    next()
}

const middlewares = {
    requestTime,
    logger
}

export default middlewares