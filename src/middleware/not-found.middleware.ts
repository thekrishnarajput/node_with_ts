import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
    response: Response,
    request: Request,
    next: NextFunction,
) => {
    console.log("request notFoundHandler:-", request);
    const message = "<h1>Resource not found</h1>";

    response.status(404).send(message);
}