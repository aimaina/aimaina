module.exports = {
    name: 'join',
    category: 'Music',
    description: 'Join a voice channel',
    aliases: ['move', 'connect'],
    execute: async (client, msg, _args) => {
        if (!msg.member.voice.channel) {
            return msg.channel.send('You are not in a voice channel!');
        }

        client.distube.voices.join(channel);
    }
};
