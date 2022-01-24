const casts = require("../../cast/cast.json")
const { MessageAttachment, MessageEmbed } = require('discord.js');


module.exports = {
    name: "cast",
    category: 'cast_dota',
    description: "get invoker cast",


    expectedArgs: '<k1> <k2> <k3>',
    minArgs: 1,
    maxArgs: 3,






    callback: ({ message, args }) => {

        let cast = NaN

        if (args.length === 1){
            cast = casts[args[0]]

        }else if (args.length === 2){
            message.channel.send("Недостаточно данных для каста")
            return
        }
        else{
            let c = ""
            args.forEach(function (item, i, arr){
                c += item
            })
            cast = casts[c]


        }
        let cn
        let file
        if (typeof cast === 'undefined'){
            file = new MessageAttachment(`img/dota/invk.jpg`);
            cn = "Учи прокасты крипочек"
        }else{
            file = new MessageAttachment(`img/dota/${cast["img"]}.jpg`);
            cn = cast.name
        }



        message.channel.send({embeds: [{
                "title": `${cn}`,
                "color": Math.round(Math.random() * 1000000),
                "description": "",
                "timestamp": "",
                "author": {
                    "name": ""
                },
                "image": {},
                "thumbnail": {},
                "footer": {
                    "text": "",
                },
                "fields": []
            }], files: [file]})
    }
}