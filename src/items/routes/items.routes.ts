/* Required External Modules and Interfaces */

import express from "express";
import { createItemController, deleteItemController, findAllItemController, findItemController, updateItemController } from "../controllers/item.controller";
import { auth } from "../../middleware/token.middleware";
/* Router Definition */

export const itemRouter = express.Router();

/* Controller Definitions */

// To get all the items list
itemRouter.get('/item-list', auth, findAllItemController);

// To get selected item details
itemRouter.get('/find-item', auth, findItemController);

// To save new items
itemRouter.post('/save', auth, createItemController);

// To update item
itemRouter.post('/update-item', auth, updateItemController);

// To delete item
itemRouter.post('/delete', auth, deleteItemController);