module.exports= {
    name: 'checkpp',
    description : "pp checker",
    execute(message, args) {
        
        if(message.member.roles.cache.has('847325724896526397')){
            message.channel.send(' confirmed!');
            
        } else {
            message.channel.send('no detected.');
        }
            

    }
}
