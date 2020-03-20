module.exports = {
    name: 'clear',
    description: "clears a specified message information",
    execute(msg, args){
      
        if (!args[1]) return msg.reply('Error Argument Not Defined')
        msg.channel.bulkDelete(args[1]);
    }
}
