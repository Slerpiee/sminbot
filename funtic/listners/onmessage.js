module.exports = (client) => {
    client.on('messageCreate', message => {
        console.log(`message from: ${message.author.username} || content: ${message.content}`)
    })
}