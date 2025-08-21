const { Schema, model } = require('mongoose')
const { common } = require('./common')
const catSchema = new Schema({
    name:{
        ...common,
        unique:[true,"category already exist"]
    }
},{
    timestamps:true
})

exports.Category = model('Category',catSchema)