module.exports = {
    name: 'roll',
    category: 'Fun',
    description: 'Roll the dice!',
    async execute(_client, msg, _args) {
        msg.channel.send(`:game_die: I rolled a **${Math.floor(Math.random() * 6) + 1}**!`);
    }
};
