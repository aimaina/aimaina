module.exports = {
    name: 'deletestarboard',
    category: 'Admin',
    description: 'Delete starboard in the current channel',
    ownerOnly: true,
    aliases: ['deletestar'],
    async execute(client, msg, _args) {
        client.starboard.delete(msg.channel.id, '⭐');
        msg.channel.send('Deleted starboard!');
    }
};
