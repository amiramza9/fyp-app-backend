const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const facultyRouter = require("./routes/facultyRouter");
const venueRouter=require('./routes/venuesRouter')
const adminRouter=require('./routes/adminroute')

const app = express();
app.use(express.json());
const PORT = 3000 || process.env.MONGODB_URI;


// connect to mongodb

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    // listen on port
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    })


  })


// routes
app.use("/api/admin", adminRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/venue", venueRouter);



app.get("/", (req, res) => {
  res.json({msg:"Welcome to the FYP Management Server"})
})