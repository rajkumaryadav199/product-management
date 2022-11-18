const catchAsyncError=require("../middleware/catchAsyncError");
const {ProductSchema}=require("../models/productModel")

//Create product 

exports.createProduct=catchAsyncError( async(req, res, next)=>{

    
   
        const product=await ProductSchema.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
  
})

exports.getAllFavourits=(req,res)=>{
    res.status(200).json({message:"Route is working fine"}
    )
}