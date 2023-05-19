import ErrData from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    error: ErrData,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let status = error.statusCode || 500;
    response.status(status).send(error);
}