const express=require('express')
const friendsRouter=express.Router();
const friendsController=require('../controllers/friends.controller');

friendsRouter.use((req,res,next)=>{
    console.log(req.ip);
    next()
})

friendsRouter.get('/',friendsController.getFriend)
friendsRouter.post('/',friendsController.postFriend);
friendsRouter.get('/:id',friendsController.getFriendByID)
module.exports=friendsRouter;