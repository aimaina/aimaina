module.exports = {
    name: 'stop',
    category: 'Music',
    description: 'Stop the currently playing music',
    execute: async (client, msg, _args) => {
        const queue = client.distube.getQueue(msg);
        if (!queue) {
            return msg.channel.send('There is nothing playing!');
        }

        queue.stop();
        msg.channel.send('Stopped!');
    }
};
