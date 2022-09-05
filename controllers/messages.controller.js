//messages endpoints 
function getMessages(req,res){
    res.send('<h2>Hello buddy! </h2>')
}

function addMessage(req,res){
    console.log('updating messages');
}

module.exports={getMessages,addMessage}
