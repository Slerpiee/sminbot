module.exports = {
    name: "roll",
    category: 'roll_dota',
    description: "Get dota roll",


    expectedArgs: '<num1> <num2>',
    minArgs: 0,
    maxArgs: 2,






    callback: ({ message, args }) => {
        let callb = NaN
        const username = message.author.username
        const a1 = parseInt(args[0])
        const a2 = parseInt(args[1])

        function rand(a, a1){
            return Math.round(Math.random() * (a1 - a) + a)
        }

        if (isNaN(a1) && isNaN(a2)){
            callb = rand(1, 100)
        }else{
            callb = rand(a1, a2)
        }
        console.log(callb)
        message.channel.send({embeds: [{
                "title": `${callb}`,
                "color": Math.round(Math.random() * 1000000),
                "description": "",
                "timestamp": "",
                "author": {
                    "name": ""
                },
                "image": {},
                "thumbnail": {},
                "footer": {
                    "text": `${username}`
                },
                "fields": []
            }]})

    }
}