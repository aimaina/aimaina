module.exports = {
    name: 'repeat',
    category: 'Music',
    description: 'Repeat a song in the playlist, or the playlist itself',
    aliases: ['loop'],
    execute: async (client, msg, args) => {
        const queue = client.distube.getQueue(msg);
        if (!queue) {
            return msg.channel.send('There is nothing playing!');
        }

        // reference for modes etc: https://github.com/distubejs/example/blob/v3/commands/repeat.js
        // 0 = off, the default
        let mode = 0;
        if (args[0] === 'song' || args[0] === 'on') { 
            mode = 1;
        } else if (args[0] === 'queue') {
            mode = 2;
        }

        queue.setRepeatMode(mode);
        msg.channel.send(`Repeat set to **${mode ? (mode === 2 ? 'queue' : 'song') : 'off'}**`);
    }
};
