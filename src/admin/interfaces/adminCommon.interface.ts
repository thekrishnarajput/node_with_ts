import { Document } from "mongoose";

/* Define interface */

export interface AdminInterface extends Document {
    full_name: string;
    email: string;
    mobile_number: number;
    password: string;
    status: number;
    role: number;
}