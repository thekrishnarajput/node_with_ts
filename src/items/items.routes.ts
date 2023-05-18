/* Required External Modules and Interfaces */

import express, { Request, Response } from "express";
import * as ItemServiceModel from "./items.serviceModel";
import { BaseItem, Item } from "./item.interface";

/* Router Definition */

export const itemRouter = express.Router();

/* Controller Definitions */

// To get all the items list
itemRouter.get('/', async (req: Request, res: Response) => {
    try {
        console.log("Hello Dev");
        const items: Item[] = await ItemServiceModel.findAll();

        res.status(200).send(items);
    }
    catch (error) {
        console.log("Catch error:-", error);

        res.status(500).send(error);
    }
});

// To get selected item details
itemRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        let id: number = +req.params.id;
        console.log("Router ID:--", id);
        const item: Item = await ItemServiceModel.find(id);
        if (item) {
            return res.status(200).send(item);
        }
        res.status(404).send("No Data Found!");
    }
    catch (error) {
        console.log("Catch error:-", error);
        res.status(500).send(error);
    }
});

// To save new items
itemRouter.post('/save', async (req: Request, res: Response) => {
    try {
        let reqBody: BaseItem = req.body;
        const result = await ItemServiceModel.create(reqBody);
        if (result)
            return res.status(200).send({ message: "Item added successfully!" });
        res.status(400).send("Item could not be saved!");
    }
    catch (error) {
        res.status(500).send(error);
    }
});

// To update item
itemRouter.post('/update', async (req: Request, res: Response) => {
    try {
        let reqBody = req.body;
        let id: number = +reqBody.id;
        // // Find if the item is exists or not
        // let findResult = await ItemServiceModel.find(id);

        // if (!findResult) {
        //     return res.status(404).send("Item doesn't exist!");
        // }

        const updateResult = await ItemServiceModel.update(reqBody);
        console.log("updateResult:-", updateResult);
        if (updateResult) {
            return res.status(200).send({ message: "Item details has been updated successfully!" });
        }
        res.status(400).send("Item could not be updated!");
    }
    catch (error) {
        res.status(500).send(error);
    }
});

// To delete item
itemRouter.post('/delete', async (req: Request, res: Response) => {
    try {
        let reqBody = req.body;
        let id: number = +reqBody.id;

        let deleteResult = await ItemServiceModel.deleteItem(id);

        if (deleteResult !== null) {
            return res.status(200).send({ message: "Item has been deleted successfully!" })
        }
        else {
            return res.status(400).send("Item could not be deleted!");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});