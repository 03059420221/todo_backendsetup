const express = require ('express');
const mongoose=require("mongoose");
const dotenv = require('dotenv').config();

const app= express();
//use express to json to get data
app.use(express.json());
//PORT
const PORT=process.env.PORT||5000;
// im importing routes
const TodoItemRoute=require("./routes/todoitems");
//lets connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("database connected"))
.catch(err => console.log(err))
 app.use("/",TodoItemRoute );


//add port and connect to server
app.listen(PORT,()=>console.log("server connected"));
