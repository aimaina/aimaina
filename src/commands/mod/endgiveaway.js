module.exports = {
  name: 'endgiveaway',
  category: 'Mod',
  description: 'End a giveaway',
  ownerOnly: true,
  aliases: ['endgive'],
  usage: '<messageID>',
  async execute(client, msg, args) {
    const messageID = args[0];
    client.giveawaysManager
      .end(messageID)
      .then(() => {
        msg.channel.send('Giveaway ended!');
      })
      .catch((err) => {
        msg.channel.send(`No giveaway found for ${messageID}, ${err}`);
      });
  },
};
