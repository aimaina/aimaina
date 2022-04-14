module.exports = {
    name: 'previous',
    category: 'Music',
    description: 'Go back a song',
    execute: async (client, msg, _args) => {
        const queue = client.distube.getQueue(msg);
        if (!queue) {
            return msg.channel.send('There is nothing playing!');
        }

        const song = queue.previous();
        msg.channel.send(`Now playing: **${song.title}** (${song.formatDuration})`);
    }
};
