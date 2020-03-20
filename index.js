//Discord Github Rep. File
const Discord = require('discord.js');
const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const token = 'Njg5ODI4NDQxMTY3ODg4NjEz.XnIp6g.UKWLoA6IlHMLgyQqApuFaQWymiU';
const ms = require('ms');
const PREFIX = '^';
var servers = {};

const cheerio = require('cheerio');

const request = require('request');

const ytdl = require("ytdl-core");

//Command Handler Script
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(File => File.endsWith('.js'));
for(const File of commandFiles){
    const command = require(`./Commands/${File}`);

    bot.commands.set(command.name, command);
}
// End Command Handler Script
bot.on('ready', () => {
    console.log('Meow Bot is online!')
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "announcements");
if(!channel) return;

channel.send(`Welcome to ${guild.name} @${member.tag} Have a great time in ${guild.name}!`)
});

bot.on('message', msg => {

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            bot.commands.get('ping').execute(msg, args);
            break;
        case 'Time':
            bot.commands.get('Time').execute(msg, args);
            break;
        case 'info':
           bot.commands.get('info').execute(msg, args);
            break;
        case 'clear':
           bot.commands.get('clear').execute(msg, args);
            break;
        case 'playerinfo':
           bot.commands.get('playerinfo').execute(msg, args);
            break;
        case 'mute':
           bot.commands.get('mute').execute(msg, args);
            break;

        case 'catimage':
           bot.commands.get('catimage').execute(msg, args);

            break;
        case 'kick':
            if (!args[1]) msg.channel.send('Error Missing person ^kick   <----[HERE]')

            const user1 = msg.mentions.users.first();

            if (user1) {
                const member = msg.guild.member(user1);

                if (member) {
                    member.kick('Kicked for Acting Up').then(() => {
                        msg.reply(`Sucessfully kicked @${user.tag}`);
                    }).catch(Error => {
                        msg.reply(`I was unable to kick @${user.tag}!`);
                        console.log(Error);
                    });
                } else {
                    msg.reply(`@${user1.tag} isn\'t in the server!`)
                }
            } else {
                msg.reply(`@${user1.tag} isn\'t in the guild!`)
            }
            break;
        case 'ban':
            if (!args[1]) msg.channel.send('Error Missing person ^kick   <----[HERE]')

            const user = msg.mentions.users.first();

            if (user) {
                const member = msg.guild.member(user);

                if (member) {
                    member.ban({
                        ression: 'you were bad '
                    }).then(() => {
                        msg.reply(`@${user.tag} was banned!`)
                    })

                } else {
                    msg.reply(`@${user.tag} isn\'t in the server!`)
                }
            } else {
                msg.reply(`@${user.tag} isn\'t in the guild!`)
            }

            break;

        case 'play':

           bot.commands.get('play').execute(msg, args);
            break;

            case 'skip':
               bot.commands.get('skip').execute(msg, args);
                break;

                case 'stop':
                  bot.commands.get('stop').execute(msg, args);
                    break;

                    case 'poll':
                        const Embed1 = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle("Polls Help")
        .setDescription("^poll \"Title\" to start a simple y/n poll.");

        if(!args[1]){
            msg.channel.send(Embed1).catch(console.error);
            
        }

        let msgArgs = args.slice(1).join(" ");

        msg.channel.send(`@everyone ${msg.author} Started a poll. Vote now!`);
        msg.channel.send("🗳️" + "**" + msgArgs + "**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
            msg.delete(5000).catch(console.error);
        })
                        break;
                        case 'help':
                        const Embed = new Discord.MessageEmbed()
                        .setTitle("Basic Commands For @MeowBot")
                        .setColor(0xFF0000)
                        .addField("^ping")
                        .addField("^time")
                        .addField("^poll")
                        .addField("^play")
                        .addField("^skip")
                        .addField("^stop")
                        .addField("^catimage")
                        .addField("^playerinfo")
                        .addField("^info [Arg}")
                        .setDescription("Use The \"^Help\" Commands to List commands for basic user accounts")


                        msg.author.send(Embed);
                        break;






    }
});

function image(msg) {

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "Cute Cat Images",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };

    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);
        if (!urls.length) {

            return;

        }

        //send request
        msg.channel.send(urls[Math.floor(Math.random() * urls.length)]);

    });
}

bot.login(proccess.env.token);