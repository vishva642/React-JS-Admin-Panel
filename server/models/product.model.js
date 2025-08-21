const { Schema, model } = require('mongoose')
const { common } = require('./common')
const productSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    p_name: common,
    p_price: Number
}, {
    timestamps: true
})

exports.Product = model('Product', productSchema)