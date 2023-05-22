import mongoose, { Schema, Document } from "mongoose";

/* Define interface */

export interface AdminInterface extends Document {
    name: string;
    email: string;
    mobile_number: number;
    password: string;
    status: number;
    role: number;
}

const adminSchema = new Schema<AdminInterface>({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    mobile_number: {
        type: Number,
        required: true,
        minlength: 1,
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
    },
    status: {
        type: Number,
        required: true,
        default: 1,
    },
    role: {
        type: Number,
        required: true,
        default: 1,
    },
}, { timestamps: true });

export default mongoose.model<AdminInterface>("admins", adminSchema);