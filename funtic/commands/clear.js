
module.exports = {
    ownerOnly: true,
    category: 'clearing',
    description: 'to clear messages',


    expectedArgs: '<num1>',
    minArgs: 1,
    maxArgs: 1,





    callback: async({ message, args }) => {
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
    },
    error: ({ error, command, message, info }) => {

    }
}