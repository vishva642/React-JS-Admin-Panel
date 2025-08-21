const { Schema, model } = require("mongoose");
const { common } = require("./common");

const userSchema = new Schema({
    name: common,
    email: {
        ...common,
        unique: false
    },
    password: common,
    token: {
        ...common,
        required: false
    },
    // role_id:{
    //     type:String,
    //     default:"user",
    //     enum:["user","admin","super_admin"],
    //     required:true
    // }
    role_id: {
        type: Number,
        default: 0,
        enum: [0, 1, 2],
        required: true
    }
},
    {
        timestamps: true
    })

const User = model('User', userSchema)

module.exports = User