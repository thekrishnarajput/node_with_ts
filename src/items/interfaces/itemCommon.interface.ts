import { Document } from "mongoose";

/* Define interface */

export interface ItemInterface extends Document {
    name: string;
    price: number;
    description: string;
    image: string;
}