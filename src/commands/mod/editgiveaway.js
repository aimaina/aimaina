const ms = require('ms');

module.exports = {
  name: 'editgiveaway',
  category: 'Mod',
  description: 'Edit a giveaway',
  ownerOnly: true,
  aliases: ['editgive'],
  usage: '<messageID> <time> <winnerCount> <prize>',
  async execute(client, msg, args) {
    const messageID = args[0];
    const time = args[1];
    const winnerCount = args[2];
    const prize = args.slice(3).join(' ');

    if (!time || !winnerCount || !prize) {
      return msg.channel.send('Invalid arguments!');
    }

    client.giveawaysManager
      .edit(messageID, {
        newWinnerCount: winnerCount,
        newPrize: prize,
        addTime: ms(time),
      })
      .then(() => {
        msg.channel.send('Giveaway edited!');
      })
      .catch((err) => {
        msg.channel.send(`No giveaway found for ${messageID}, ${err}`);
      });
  },
};
