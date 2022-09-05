//setup and imports
const express = require('express');
const app=express();
const friendsRouter = require('./routes/freinds.router');
const messageRouter =require('./routes/message.router')

//preset data
const PORT=4000;

//middleware 
app.use(function(req,res,next){
    const start=Date.now();
    next();//goes to the get method
    const delta=Date.now()-start;
    console.log(`${req.method} to ${req.baseUrl}${req.url} in ${delta}ms`)
})

app.use(express.json());
app.use('/friends',friendsRouter)
app.use('/messages',messageRouter)



//sets up server to listen
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`)
})