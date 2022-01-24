const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const {token} = require("../config.json")
const { Intents } = DiscordJS

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

client.on('ready', () => {
    new WOKCommands(client, {

        commandsDir: path.join(__dirname, "commands"),
        featuresDir: path.join(__dirname, "listners"),
        botOwners: (['540941468618194954']),


    }) .setDefaultPrefix("!")

})






client.login(token)