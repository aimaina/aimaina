module.exports = {
    name: 'skip',
    category: 'Music',
    description: 'Skip the current song',
    execute: async (client, msg, _args) => {
        const queue = client.distube.getQueue(msg);
        if (!queue) {
            return msg.channel.send('There is nothing playing!');
        }

        const song = await queue.skip();
        msg.channel.send(`Now playing: **${song.title}** (${song.formatDuration})`);
    }
};
