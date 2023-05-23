import { ItemInterface } from "../schemas/items.schema";
import { NextFunction, Response } from 'express';
import ItemServiceModel from "../models/items.serviceModel";
import { ErrData } from "../../common/http-exception";
import { messages, response } from "../../middleware/util.middleware";
import { TypeInterface as Request, toStrings } from "../../common/types.interface";
import { Enum } from "../../common/enum";

// Create item method
export const createItemController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.user.role !== Enum.adminRoleId)
            throw ErrData(400, messages.notAuthorized(), false);
        let Body: ItemInterface = req.body;
        const result = await ItemServiceModel.createItem(Body);
        if (!result)
            throw ErrData(400, messages.itemNotSaved(), false);
        return response(res, 200, true, "Item added successfully!", result);
    }
    catch (error) {
        console.error("Catch error:-", error);
        next(error);
    }
}

// Find all item list
export const findAllItemController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await ItemServiceModel.findAll();
        return response(res, 200, true, "Data found!", items);
    }
    catch (error) {
        console.error("Catch error:-", error);
        next(error);
    }
}

// Find item by id
export const findItemController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let id: string = (req.query.id + "");
        const item = await ItemServiceModel.findItem(id);
        if (!item) {
            throw ErrData(400, "No data found!", false);
        }
        return response(res, 200, true, "Data found!", item);
    }
    catch (error) {
        console.error("Catch error:-", error);
        next(error);
    }
}

// Update items using Object id
export const updateItemController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.user.role !== Enum.adminRoleId)
            throw ErrData(400, "You are not authorized to perform this action!", false);
        let Body = req.body;
        const updateResult = await ItemServiceModel.updateItem(Body);
        if (!updateResult) {
            throw ErrData(400, "Item could not be updated!", false);
        }
        return response(res, 200, true, "Item details has been updated successfully!", updateResult);
    }
    catch (error) {
        console.error("Catch error:-", error);
        next(error);
    }
}

// delete items using Object id
export const deleteItemController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.user.role !== Enum.adminRoleId)
            throw ErrData(400, "You are not authorized to perform this action!", false);

        let id: string = toStrings(req.query.id + "");
        let deleteResult = await ItemServiceModel.deleteItem(id);
        if (!deleteResult) {
            throw ErrData(400, "Item could not be deleted!", false);
        }
        return response(res, 200, true, "Item has been deleted successfully!", deleteResult);
    }
    catch (error) {
        console.error("Catch error:-", error);
        next(error);
    }
}