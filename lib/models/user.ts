import { Schema, model, models } from "mongoose";

const userSchema = new Schema (
    {
        username: {type: "string", required: false, unique: true},
        email: {type: "string", required: false, unique: true},
        password: {type: "string", required: true},
    },
    {
        timestamps: true,
    }
)

const User = model("User", userSchema);

export default User;
