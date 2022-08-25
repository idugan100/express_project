const express=require('express');
const app=express();

const PORT=4000;
const friends=[
    {id:0,
    name:'Dustin'},
    {id:1,
    name:'Josh'},
    {id:2,
    name:'Lily'
    }
]

app.get('/friends',(req,res)=>{
    res.json(friends)
})

app.get('/friends/:id',(req,res)=>{
    const friendId=+req.params.id;
    const friend=friends[friendId]
    if(friend){
        res.json(friends[friendId])
    }else{
        res.status(404).json({error:'invalid friend id'});
    }
    
})

app.get('/messages',(req,res)=>{
    res.send('<h2>Hello buddy! </h2>')
})
app.post('/messages',(req,res)=>{
    console.log('updating messages');
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`)
})