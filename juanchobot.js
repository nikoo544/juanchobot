const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
    console.log("Altoke perri!");
    client.user.setPresence( {
        status: "online",
        game: {
            name: "Apex Legends",
            type: "PLAYING"
        }
    });
});

var prefix = config.prefix;

client.on("message", (message) => {

    if (message.author.bot) return;
    if (message.content.startsWith("hola juani")) {
        message.channel.send("puto");
    } else
    if (message.content.startsWith(prefix + "hola")) {
        message.channel.send("Hola que tal?");
    }
    if (message.content.includes("4")) {
        message.channel.send("te puse");
    }
    if (message.content.includes("7")) {
        message.channel.send("te escupí");
    }
    if (message.content.includes("puto")) {
        message.channel.send("tu vieja");
    }

    //pirulo


});

client.on("guildMemberAdd", (member) => {
    console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
    var canal = client.channels.get('595472506387693573');
    canal.send(`El adoptado de ${member.user}, se ha unido al grupo.`);
});
client.login(config.token);