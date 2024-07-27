// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()

// app.use(express.json())

// const ConnectDB = async() =>{
//     try{
//         await mongoose.connect("mongodb://localhost:27017/Blog-Server",{
//             useNewUrlParser :true,
//             useUnifiedTopology : true

//         });
//         console.log("connected successfulyy")
//     }catch(err){
//         console.log(err.message)
//         process.exit(1)
//     }
// }

// ConnectDB()

// app.use('/',UserRoutes);

// app.listen(3000,()=>{
//     console.log("server is running in port 3000");
// });
