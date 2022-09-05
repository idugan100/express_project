const friends=require('../model/friends.model').friends
function getFriend(req,res){
    res.json(friends)
}

function postFriend(req,res){
    if(!req.body.name){
        res.status(400).json({error:'invalid friend name'})
    }
    else{
        const newFriend={
            name:req.body.name,
            id:friends.length
        }
        friends.push(newFriend);
        res.json(newFriend)
    }      
}

function getFriendByID(req,res){
    const friendId=+req.params.id;
    const friend=friends[friendId]
    if(friend){
        res.json(friends[friendId])
    }else{
        res.status(404).json({error:'invalid friend id'});
    }
    
}

module.exports={getFriend,getFriendByID,postFriend}