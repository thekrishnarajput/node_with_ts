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