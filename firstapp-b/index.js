const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

console.log("USING MONGO URL:", process.env.MONGODB_URL);

const authRoutes = require('./routes/auth');
const app = express();
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

mongoose.connect(process.env.MONGODB_URL)
     .then(()=>{
        console.log("connected to mongodb")
     })
        .catch((err)=>{
            console.log(err)
        })

app.use('/api', authRoutes)
app.get("/", (req,res)=>{
    res.json({"meassage":"server is running"})
})
app.listen(port,()=>console.log(`server is running on port ${port}`))