module.exports = {
    name: "ping",


    callback: async({ message}) => {
        await message.channel.send("ping")
    }
}