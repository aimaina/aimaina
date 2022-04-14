const characters = require('../../data/ramenCharacters.json');
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
    name: 'ramen',
    category: 'Fun',
    description: 'do it you won\'t',
    async execute(_client, msg, _args) {
        const character1 = characters[Math.floor(Math.random() * characters.length)];
        const character2 = characters[Math.floor(Math.random() * characters.length)];

        msg.channel.send(character1.emotes.pog + ' <:doushitenoodles:755874703788474538> ' + character2.emotes.pog);
        const emoteString = Math.random() >= 0.5 ? character1.emotes.win + ' <:doushitenoodles:755874703788474538> ' + character2.emotes.sad : character1.emotes.sad + ' <:doushitenoodles:755874703788474538> ' + character2.emotes.win;
        await timer(3000);
        msg.channel.send(emoteString).then((msg) => msg.react('🇫'));
    }
};