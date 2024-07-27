// const express = require("express");
// const route = express.Router();
// const User = require("../models/User.schema");

// route.post("/users", async (req, res) => {
//   try {
//     const userDetails = new User(req.body);
//     await userDetails.save();
//     res.status(201).json(userDetails);
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
// });

// route.get("/users", async (req, res) => {
//   try {
//     const userDetails = await User.find();
//     res.status(200).json(userDetails);
//   } catch {
//     res.status(404).json({ Error: err.message });
//   }
// });

// route.get("/user:email", async (req, res) => {
//   try {
//     const userDetails = await User.findOne({ email: req.params.email });
//     if (!userDetails) {
//       res.status(404).json({ Error: "user Not Found" });
//     } else {
//       req.status(200).json(userDetails);
//     }
//   } catch (err) {
//     res.status(500).json({ Error: err.message });
//   }
// });

// route.put("user/:email", async (req, res) => {
//   try {
//     const userDetails = await User.findOneAndUpdate(
//       req.params.email,
//       req.body,
//       { new: true }
//     );
//     if (!userDetails) {
//       res.status(404).json({ Error: "Email doesn't match" });
//     } else {
//       res.status(200).json(userDetails);
//     }
//   } catch (err) {
//     res.status(500).json({Error : err.message});
//   }
// });

// route.delete('/user:email',async(req,res)=>{
//     try
//     {const userDetails = await User.findOneAndDelete(req.params.email);
//     if(!userDetails){
//         res.status(404).json({Error:"Email Not found"})
//     }else{
//         res.status(200).json(userDetails)
// }}catch(err){
//     res.status(500).json({Error: err.message})
// }
// })

// module.exports = router;