const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once("ready", () => {
console.log('dikscorps bot is online');
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



   if(command === 'worth'){
       client.commands.get('worth').execute(message, args);
   //  message.channel.send('The current worth of Dikcorps is $112,440,068');    
   } else if (command === 'pong'){
    message.channel.send('ping');    
   }
})



client.login('ODY0NTMzMDQwOTg1NjY5NjYy.YO21Iw.PiAxXvJuqKI0s0SMlwln42bHjOs')