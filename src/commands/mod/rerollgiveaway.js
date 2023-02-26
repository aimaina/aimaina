module.exports = {
  name: 'rerollgiveaway',
  category: 'Mod',
  description: 'Reroll a giveaway',
  ownerOnly: true,
  aliases: ['reroll'],
  usage: '<messageID>',
  async execute(client, msg, args) {
    const messageID = args[0];
    client.giveawaysManager
      .reroll(messageID)
      .then(() => {
        msg.channel.send('Giveaway rerolled!');
      })
      .catch((err) => {
        msg.channel.send(`No giveaway found for ${messageID}, ${err}`);
      });
  },
};
