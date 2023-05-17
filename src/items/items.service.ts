/* Data Model Interfaces */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/* In-Memory Store */

let items: Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 10,
        description: "World famous burger in Indore.",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "pizza",
        price: 15,
        description: "World famous pizza in Indore.",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        price: 5,
        description: "World famous tea in Indore.",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
};

/* Service Methods */

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();

    items[id] = {
        id,
        ...newItem
    }
    return items[id];
}

export const update = async (id: number, itemUpdate: BaseItem): Promise<Item | null> => {
    const itemResult = await find(id);

    if (!itemResult) {
        return null;
    }

    items[id] = { id, ...itemUpdate };

    return items[id];
}

export const deleteItem = async (id: number): Promise<null | void> => {
    const itemResult = find(id);
    if (!itemResult) {
        return null;
    }
    delete items[id];
}