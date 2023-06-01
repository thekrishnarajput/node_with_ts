import mongoose, { Schema } from "mongoose";

import { UserInterface } from "../interfaces/userCommon.interface";
import { Enum } from "../../utils/common/enum";
import { timeStamp } from "console";

const userSchema = new Schema<UserInterface>({
    full_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Number,
        default: Enum.inactiveStatus,
        required: true
    },
    role: {
        type: Number,
        default: Enum.userRoleId,
        required: true
    },
    profile_pic: String,
    address: {
        address1: {
            type: String,
            required: true
        },
        address2: String,
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    orders: [{
        order_id: String,
        order_date: Date,
        order_status: Number,
        order_total: Number,
        order_items: [{
            item_id: String,
            item_name: String,
            item_price: Number,
            item_quantity: Number,
        }]
    }]
}, { timestamps: true });

export default mongoose.model<UserInterface>("user", userSchema);