module.exports = {
    name: 'play',
    category: 'Music',
    description: 'Play a song or playlist in VC',
    aliases: ['p'],
    async execute(client, msg, args) {
        const input = args.join(' ');
        if (!input) {
            return msg.channel.send('Enter a song to search or playlist URL');
        }

        client.distube.play(msg.member.voice.channel, input, {
            member: msg.member,
            textChannel: msg.channel,
            msg
        });
    }
};
