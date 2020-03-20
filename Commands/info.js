var version = '1.0.6';
module.exports = {
    name: 'info',
    description: "shows information about the bot",
    execute(msg, args){
        
        if (args[1] === 'version') {
            msg.channel.send('Version', + version);
        } else {
            msg.channel.send('Error "^info    <-----[HERE}"')
        } 
    }
}
