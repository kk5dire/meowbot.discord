module.exports = {
    name: 'mute',
    description: "mutes the specified player from the server",
    execute(msg, args){
      
        let person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
            if (!person) return msg.reply("Error Couldent Find That Member");

            let mainrole = msg.guild.roles.fetch(role => role.name === "Member");
            let muterole = msg.guild.roles.fetch(role => role.name === "Untrusted");

            if (!muterole) return msg.reply("Error in code Couldn't find Mute role!");

            let Time = args[2];

            if (!Time) {
                return msg.reply("Error Missing Time ^mute @user   <-------[HERE]");

            }

            person.roles.remove(mainrole.id);
            person.roles.add(muterole.id);

            msg.channel.send(`@${person.user.tag} has now been shused with kitty magic for ${ms(ms(Time))}`);

            setTimeout(function () {
                person.roles.add(mainrole.id)
                person.roles.remove(muterole.id);
                msg.channel.send(`@${person.user.tag} is back YAY! Congrats @${person.user.tag} `)
            }, ms(Time));
            

    }
}