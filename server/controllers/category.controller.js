const { Category } = require("../models/category.model")

exports.store = async (req, res) => {
    const { name } = req.body

    const existName = await Category.findOne({ name })
    if (existName) {
        res.json({
            success: false,
            message: "Category Already Exist"
        })
    } else {
        await Category.create({ name })
            .then((result) => {
                res.json({
                    success:true,
                    message:"Category added"
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

exports.index  = async (req,res)=>{
    // await Category.find().sort({name:1})
    await Category.find().sort({updatedAt:-1})
    .then((result)=>{
        res.json({
            success:true,
            category:result
        })
    })
    .catch((err)=>console.log(err))
}


exports.trash  = async (req,res)=>{
    console.log(req.params)
    const {id} = req.params;
    await Category.findByIdAndDelete(id)
    .then((result)=>{
        res.json({
            success: true,
            category: result
        })
    }).catch((err)=> console.log(err))
}


exports.getSingleData = async (req, res) => {
  const id = req.params.id;
  await Category.findById(id)
  .then((result)=>{
        res.json({
            success: true,
            category: result
        })
    }).catch((err)=> console.log(err))
 
};


exports.editSingleData = async (req, res) => {
  const id = req.params.id;
  console.log(req.params, "id mil gyi")
  console.log(req.body, 'data mil gaya')
  const {name} = req.body;
  await Category.findByIdAndUpdate(id, { name })
  .then((result)=>{
        res.json({
            success: true,
            category: result
        })
    }).catch((err)=> console.log(err))
  
};



