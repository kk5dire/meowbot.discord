var version = '1.0.6';
const Discord = require('discord.js');
module.exports = {
    name: 'playerinfo',
    description: "shows some information about the player",
    execute(msg, args){
      
        const embed2 = new Discord.MessageEmbed()
        .setTitle('User Information')
        .addField('Player Name', msg.author.username)
        .addField('Version', version)
        .addField('Current Server', msg.guild.name)
        .setColor(0xEF0947)
        .setThumbnail(msg.author.avatarURL)
        .setFooter('Meow WoW :o !!!')

    msg.channel.send(embed2);
    }
}
