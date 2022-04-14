const fetch = require('node-fetch');

module.exports = {
    name: 'lyrics',
    category: 'Utility',
    description: 'Get lyrics for a song',
    async execute(_client, msg, args) {
        const data = await (await fetch('https://some-random-api.ml/lyrics?title=' + args.slice(0).join(' '))).json();

        if (data.lyrics.length > 2000) {
            return msg.channel.send(data.links.genius);
        }

        const embed = {
            title: `${data.author} - ${data.title}`,
            color: '#209cee',
            thumbnail: {
                url: data.thumbnail.genius
            },
            description: data.lyrics,
            footer: {
                icon_url: 'https://i.some-random-api.ml/logo.png',
                text: `Lyrics provided by Some Random API | © ${data.author}`
            }
        }

        msg.channel.send({
            embeds: [embed]
        });
    }
};
