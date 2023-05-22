/* Data Model Interfaces */
import Admin, { AdminInterface } from "../schemas/admin.schema";
const adminModelSchema = Admin;
/* Service Methods */

export default {
    // Save admin
    saveAdmin: async (adminData: AdminInterface): Promise<AdminInterface> => {
        const admin = new adminModelSchema(adminData);
        return await admin.save();
    },
    // Get admin
    getAdmin: async (email: string): Promise<AdminInterface | null> => {
        let adminResult = await adminModelSchema.findOne({ email: email });
        return adminResult;
    },

    create: async (adminDataArray: AdminInterface[]): Promise<AdminInterface[]> => {
        return await Admin.create(adminDataArray);
    },
}