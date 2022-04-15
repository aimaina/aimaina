const responses = require('../../data/8ball.json');

module.exports = {
    name: '8ball',
    category: 'Fun',
    description: 'The magic 8ball',
    async execute(_client, msg, args) {
        if (!args[0]) {
            return msg.channel.send('Please include a question!');
        }

        msg.channel.send(`:8ball: ${responses[Math.floor(responses.length * Math.random())]}`);
    }
};
