module.exports = {
    name: 'skip',
    description: "skips the song in th URL specified",
    execute(msg, args){
      
        var server = servers[msg.guild.id];
        if(server.dispatcher) server.dispatcher.end();
        msg.channel.send(`@${msg.author} has skipped the current song!`)
       

    }
}