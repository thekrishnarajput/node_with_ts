import mongoose, { Schema, Document } from "mongoose";
import { ItemInterface } from "../interfaces/itemCommon.interface";


const itemSchema = new Schema<ItemInterface>({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: String,
    image: String,
}, { timestamps: true });

export default mongoose.model<ItemInterface>("Items", itemSchema);