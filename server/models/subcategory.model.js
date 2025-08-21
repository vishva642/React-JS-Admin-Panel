const { Schema, model } = require('mongoose')
const { common } = require('./common')
const subCatSchema = new Schema({
    cat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    sub_cat :common
},{
    timestamps:true
})

exports.SubCategory = model('SubCategory',subCatSchema)