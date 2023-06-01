import { Response } from "express";

export const response = async (res: Response, statusCode: number, isStatus: boolean, message: string, result: any) => {
    return res.status(statusCode).json({
        success: isStatus,
        message: message,
        data: result
    });
}

export const messages = {
    notAuthorized: () => {
        return "You are not authorized to perform this action!";
    },
    itemNotSaved: () => {
        return "Item could not be saved!";
    },
}