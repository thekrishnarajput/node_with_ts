/* Data Model Interfaces */
import Item, { ItemInterface } from "../schemas/items.schema";
import { ObjectId } from "bson";
const itemModel = Item;

/* Service Methods */
export default {
    // Create item method
    createItem: async (newItem: ItemInterface): Promise<ItemInterface> => {
        const item = new itemModel(newItem);
        return await item.save();
    },
    // Find all item list
    findAll: async (): Promise<ItemInterface[]> => {
        let findResult = await Item.find({});
        return findResult;
    },
    // Find item by id
    findItem: async (itemId: string): Promise<ItemInterface | null> => {
        let findResult = await Item.findById(itemId);
        return findResult;
    },
    // Update items using Object id
    updateItem: async (itemUpdate: ItemInterface): Promise<ItemInterface | null> => {

        let itemId: string = itemUpdate.id;
        // let updateData: object = itemUpdate;
        let itemResult = await Item.findOneAndUpdate({ _id: new ObjectId(itemId) }, { $set: itemUpdate });
        if (!itemResult) {
            return null;
        }
        return itemResult;
    },
    // delete items using Object id
    deleteItem: async (id: string): Promise<null | ItemInterface> => {
        let itemId = new ObjectId(id);
        const itemResult = Item.findOneAndDelete({ _id: itemId });
        if (!itemResult) {
            return null;
        }
        return itemResult;
    },
}