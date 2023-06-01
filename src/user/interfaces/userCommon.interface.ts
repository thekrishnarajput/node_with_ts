import { Document } from "mongoose";

export interface UserInterface extends Document {
    full_name: string,
    email: string,
    password: string,
    status: number,
    role: number,
    profile_pic: string,
    address: {
        address1: string,
        address2: string,
        city: string,
        state: string,
        pincode: number,
        country: string
    },
    orders: [{
        order_id: string,
        order_date: Date,
        order_status: number,
        order_total: number,
        order_items: [{
            item_id: string,
            item_name: string,
            item_price: number,
            item_quantity: number
        }]
    }]
};