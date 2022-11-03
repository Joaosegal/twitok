const mongoose = require("mongoose");

const UserDetaillSchema = new mongoose.Schema(
    {
        username: {type: String, unique: true},
        email: {type: String, unique: true},
        password: String
    },
    {
        collection: "UserInfo"
    }
);

mongoose.model("UserInfo", UserDetaillSchema)