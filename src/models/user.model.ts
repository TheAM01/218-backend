import { model, Schema, type InferSchemaType } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export type IUser = InferSchemaType<typeof userSchema>;

export const UserModel = model("User", userSchema);