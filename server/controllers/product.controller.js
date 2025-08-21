const { Product } = require("../models/product.model")

exports.store = async (req, res) => {
    const { category, subcategory, p_name, p_price } = req.body

    const existName = await Product.findOne({ category, subcategory, p_name })
    if (existName) {
        res.json({
            success: false,
            message: "Product Already Exist"
        })
    } else {
        await Product.create({ category, subcategory, p_name, p_price })
            .then(() => {
                res.status(201).json({
                    success: true,
                    message: "Product added"
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
exports.index = async (req, res) => {
    await Product.find({}, { __v: 0 })
        .populate({
            path: 'category',
            select: 'name'
        })
        .populate({
            path: 'subcategory',
            select: 'sub_cat'
        })
        .sort({ createdAt: -1 })
        .then((result) => {
            res.status(200).json({
                success: true,
                records: result
            })
        })
        .catch((err) => console.log(err))
}