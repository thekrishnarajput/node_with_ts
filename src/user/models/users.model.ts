/* Data Model Interfaces */
import { UserInterface } from "../interfaces/userCommon.interface";
import UserModel from "../schemas/users.schema";
import { ObjectId } from "bson";

/* Service Methods */
export default {
    // Create user method
    createUser: async (Body: UserInterface) => {
        const userData = new UserModel(Body);
        return userData.save();
    },
    // Find user method
    findUser: async (_id: String) => {
        let findResult = UserModel.findById(_id);
        return findResult;
    },
    // Find user method
    findUserByEmailOrMobile: async (body: { email: String, mobile_number: Number }) => {
        let query = {};
        if (body.email) {
            query = { email: body.email }
        }
        else if (body.mobile_number) {
            query = { mobile_number: body.mobile_number }
        }
        else {
            query = {
                $and: [
                    { email: body.email },
                    { mobile_number: body.mobile_number }
                ]
            }
        }
        let findResult = UserModel.findOne(query);
        return findResult;
    },
    // User list method
    userList: async () => {
        let listResult = UserModel.find({});
        return listResult;
    },
    // Update user method
    updateUser: async (updateData: any) => {
        let setData = { $set: updateData };
        let filter = { _id: new ObjectId(updateData.userId) };
        let updateResult = UserModel.updateOne(filter, setData);
        return updateResult;
    },
    // Delete user method
    deleteUser: async (_id: String) => {
        let deleteResult = UserModel.deleteOne({ _id: _id });
        return deleteResult;
    }
}