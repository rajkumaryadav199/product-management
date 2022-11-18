
const mongoose= require("mongoose")

// module.exports =()=>{
//     return mongoose.connect(process.env.DB_URL)
// }

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser:true, useUnifiedTopology:true})
        .then((data)=>{
        console.log(`mongodb connection with server:  ${data.connection.host}`);
    
    })
    .catch((err)=>{
        console.log(`Error in connection ${err}`)
   
    })
}
        module.exports=connectDatabase