module.exports = {
    name: 'play',
    description: "plays the song in th URL specified",
    execute(msg, args){
      
     
        function play(connection, msg) {
            var server = servers[msg.guild.id];

            server.dispatcher = connection.playStream(ytdl(server.queue[0], {
                filter: "audioonly"
            }));

            server.queue.shift();

            server.dispatcher.on("end", function () {
                if(server.queue[0]) {
                    play(connection, msg);
                }else {
                    connection.disconnect();
                }
            });
        }
        if(!args[1]){
            msg.channel.send("Missing Link ^play   <-----[HERE]");
            return;
        }

        if(!msg.member.voiceConnection){
            msg.channel.send("You Must Be In A Music Voice Channel To Use This Command!");
            return;
        }

        if(!servers[msg.guild.id]) servers[msg.guild.id] = {
            queue: []
        }

        var server = servers[msg.guild.id];

        server.queue.push(args[1]);

        if(!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(function (connection) {
            play(connection, msg);
        })
            

    }
}