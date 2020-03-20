module.exports = {
    name: 'ping',
    description: "responds showing the bot is online",
    execute(msg, args){
        msg.channel.send('merrrrrrrrrrrrow!');
    }
}