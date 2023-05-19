import { ItemInterface } from "../schemas/items.schema";
import { Request, Response } from 'express';
import ItemServiceModel from "../models/items.serviceModel";
import ErrData from "../../common/http-exception";


// Create item method
export const createController = async (req: Request, res: Response) => {
    try {
        let reqBody: ItemInterface = req.body;
        const result = await ItemServiceModel.createItem(reqBody);
        if (!result)
            throw new ErrData(400, false, "Item could not be saved!");
        // return res.status(400).send({ message: "Item could not be saved!" });
            return res.status(200).send({ message: "Item added successfully!" });
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send(error);
    }
}

// Find all item list
export const findAllItemController = async (req: Request, res: Response) => {
    try {
        const items = await ItemServiceModel.findAll();
        res.status(200).send(items);
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send(error);
    }
}

// Find item by id
export const findItemController = async (req: Request, res: Response) => {
    try {
        let id: string = (req.query.id + "");
        const item = await ItemServiceModel.findItem(id);
        if (!item) {
            throw new ErrData(400, false, "No Data Found!");
            // return res.status(404).send({ message: "No Data Found!" });
        }
        return res.status(200).send(item);
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send(error);
    }
}

// Update items using Object id
export const updateItemController = async (req: Request, res: Response) => {
    try {
        let reqBody = req.body;
        let id: string = (reqBody.id + "");

        const updateResult = await ItemServiceModel.updateItem(reqBody);
        if (!updateResult) {
            return res.status(400).send({ message: "Item could not be updated!" });
        }
        return res.status(200).send({ message: "Item details has been updated successfully!" });
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send(error);
    }
}

// delete items using Object id
export const deleteItemController = async (req: Request, res: Response) => {
    try {
        let id: string = (req.query.id + "");

        let deleteResult = await ItemServiceModel.deleteItem(id);
        if (!deleteResult) {
            return res.status(400).send({ message: "Item could not be deleted!" });
        }
        return res.status(200).send({ message: "Item has been deleted successfully!" })
    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send(error);
    }
}