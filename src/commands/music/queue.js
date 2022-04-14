module.exports = {
    name: 'queue',
    category: 'Music',
    description: 'List the queue',
    aliases: ['q'],
    execute: async (client, msg) => {
        const queue = client.distube.getQueue(msg);
        if (!queue) {
            return msg.channel.send('There is nothing playing!');
        }

        const next = queue.songs
            // reference for map: https://github.com/distubejs/example/blob/v3/commands/queue.js
            .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} **${song.name}** (${song.formattedDuration})`)
            .join('\n');
        msg.channel.send(`__Queue__\n${next}`);
    }
};
