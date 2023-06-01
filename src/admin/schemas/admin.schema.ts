import mongoose, { Schema } from "mongoose";
import { AdminInterface } from "../interfaces/adminCommon.interface";
import { Enum } from "../../utils/common/enum";


const adminSchema = new Schema<AdminInterface>({
    full_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    mobile_number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
        default: Enum.activeStatus,
    },
    role: {
        type: Number,
        required: true,
        default: Enum.adminRoleId,
    },
}, { timestamps: true });

export default mongoose.model<AdminInterface>("admins", adminSchema);