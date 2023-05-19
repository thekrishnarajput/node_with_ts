/* Required External Modules and Interfaces */

import express from "express";
import { createController, deleteItemController, findAllItemController, findItemController, updateItemController } from "../controllers/item.controller";

/* Router Definition */

export const itemRouter = express.Router();

/* Controller Definitions */

// To get all the items list
itemRouter.get('/item-list', findAllItemController);

// To get selected item details
itemRouter.get('/find-item', findItemController);

// To save new items
itemRouter.post('/save', createController);

// To update item
itemRouter.post('/update-item', updateItemController);

// To delete item
itemRouter.post('/delete', deleteItemController);