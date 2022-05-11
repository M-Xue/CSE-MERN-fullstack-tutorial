import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            requireed: true
        },
        age: {
            type: Number,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        description: {
            type: String, 
            required: true
        }
    }
);

export default mongoose.model('users', UserSchema, 'Users');