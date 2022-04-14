module.exports = {
    name: 'createstarboard',
    category: 'Admin',
    description: 'Create starboard in the current channel',
    ownerOnly: true,
    aliases: ['createstar'],
    async execute(client, msg, _args) {
        client.starboard.create(msg.channel, {
            ignoredChannels: []
        });
        msg.channel.send('Created starboard!');
    }
};
