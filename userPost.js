const mongoose = require("mongoose");

const UserPostSchema = new mongoose.Schema(
    {
        idUser: String,
        username: String,
        postContent: String,
    },
    {
        collection: "UserPost"
    }
);

mongoose.model("UserPost", UserPostSchema)