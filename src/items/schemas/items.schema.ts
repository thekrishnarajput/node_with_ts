import mongoose, { Schema, Document } from "mongoose";

/* Define interface */

export interface ItemInterface extends Document {
    name: string;
    price: number;
    description: string;
    image: string;
}

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