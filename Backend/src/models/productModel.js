const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter Product name"]
    },
    discription:{
        type:String,
        required:[true, "Please enter Product discrioption"]
    },
    price:{
        type:Number,
         required:[true, "Please enter price"],
         maxLength:[8, "price can not exceded 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
       {
        public_id:{
            type:String,
            required:true   
          },
       url:{
              type:String,
              required:true   
            }
       }
    ],
    category:{
  type:String, required:[true, "please enter category"]
    },
  
   createdAt:{
        type:Date,
       default:Date.now 
    }
})

const ProductSchema=mongoose.model("Product",productSchema)

module.exports={ProductSchema}