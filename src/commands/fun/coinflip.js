module.exports = {
  name: 'coinflip',
  category: 'Fun',
  description: 'Flip a coin!',
  aliases: ['flipcoin'],
  async execute(_client, msg, _args) {
    msg.channel.send(`:moneybag: It landed on **${Math.random() >= 0.5 ? 'heads' : 'tails'}**!`);
  },
};
