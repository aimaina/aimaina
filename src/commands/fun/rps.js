module.exports = {
    name: 'rps',
    category: 'Fun',
    description: 'yes',
    execute(_client, msg, _args) {
        const rock = ['Rock :black_circle:', 'Paper :pencil:', 'Scissors :scissors:'];
        msg.channel.send(rock[Math.floor(rock.length * Math.random())]);
    }
};
