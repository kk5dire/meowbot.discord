module.exports = {
    name: 'stop',
    description: "stops the song in th URL specified",
    execute(msg, args){
        var server = servers[msg.guild.id];
        if(msg.guild.voiceConnection){
            for(var i = server.queue.length -1; i >=0; i--){
              server.queue.splice(i, 1);  
            }

            server.dispatcher.end();
            msg.channel.send(`@${msg.author} stopped the queue!`)
            console.log('stopped the queue')
        }

        if(msg.guild.connection) msg.guild.voiceConnection.disconnect();

    }
}