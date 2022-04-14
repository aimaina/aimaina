module.exports = {
    name: 'source',
    category: 'General',
    aliases: ['src', 'github', 'git', 'invite'],
    description: 'Bot source code',
    async execute(_client, msg, _args) {
        msg.channel.send('https://github.com/aimaina/aimaina');
    }
};
