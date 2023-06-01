/* Data Model Interfaces */
import { UserInterface } from "../interfaces/userCommon.interface";
import UserModel from "../schemas/users.schema";
import { ObjectId } from "bson";

/* Service Methods */
export default {
    // Create user method
    createUser: async (Body: UserInterface) => {
        const userData = new UserModel(Body);
        return await userData.save();
    },
    // Find user method
    findUser: async (_id: String) => {
        let findResult = await UserModel.findById(_id);
        return findResult;
    },
    // User list method
    userList: async () => {
        let listResult = await UserModel.find({});
        return listResult;
    },
    // Update user method
    updateUser: async (updateData: any) => {
        let setData = { $set: updateData };
        let filter = { _id: new ObjectId(updateData.userId) };
        let updateResult = await UserModel.updateOne(filter, setData);
        return updateResult;
    },
    // Delete user method
    deleteUser: async (_id: String) => {
        let deleteResult = await UserModel.deleteOne({ _id: _id });
        return deleteResult;
    }
}