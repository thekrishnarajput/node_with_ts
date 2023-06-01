/* Data Model Interfaces */
import { ItemInterface } from "../interfaces/itemCommon.interface";
import ItemModel from "../schemas/items.schema";
import { ObjectId } from "bson";

/* Service Methods */
export default {
    // Create item method
    createItem: async (newItem: ItemInterface): Promise<ItemInterface> => {
        const itemData = new ItemModel(newItem);
        return await itemData.save();
    },
    // Find all item list
    findAll: async (): Promise<ItemInterface[]> => {
        let findResult = await ItemModel.find({});
        return findResult;
    },
    // Find item by id
    findItem: async (itemId: string): Promise<ItemInterface | null> => {
        let findResult = await ItemModel.findById(itemId);
        return findResult;
    },
    // Update items using Object id
    updateItem: async (itemUpdate: ItemInterface): Promise<ItemInterface | null> => {
        let itemId: string = itemUpdate.id;
        // let updateData: object = itemUpdate;
        let itemResult = await ItemModel.findOneAndUpdate({ _id: new ObjectId(itemId) }, { $set: itemUpdate });
        if (!itemResult) {
            return null;
        }
        return itemResult;
    },
    // delete items using Object id
    deleteItem: async (id: string): Promise<null | ItemInterface> => {
        let itemId = new ObjectId(id);
        const itemResult = ItemModel.findOneAndDelete({ _id: itemId });
        if (!itemResult) {
            return null;
        }
        return itemResult;
    },
}