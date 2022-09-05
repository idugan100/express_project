//setup and imports
const express = require('express');
const app=express();

const messagesController=require('./controllers/messages.controller')
const friendsController=require('./controllers/friends.controller')

//preset data
const PORT=4000;

//middleware endpoint
app.use(function(req,res,next){
    const start=Date.now();
    next();//goes to the get method
    const delta=Date.now()-start;
    console.log(`${req.method} to ${req.url} in ${delta}ms`)

})
app.use(express.json());

//friends endpoints
app.get('/friends',friendsController.getFriend)
app.post('/friends',friendsController.postFriend);
app.get('/friends/:id',friendsController.getFriendByID)

//messages
app.get('/messages',messagesController.getMessages)
app.post('/messages',messagesController.addMessage);

//sets up server to listen
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`)
})