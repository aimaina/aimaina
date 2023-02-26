const ms = require('ms');

module.exports = {
  name: 'startgiveaway',
  category: 'Mod',
  description: 'Start a giveaway',
  ownerOnly: true,
  aliases: ['startgive', 'giveaway'],
  usage: '<time> <winnerCount> <prize>',
  async execute(client, msg, args) {
    const channel = msg.mentions.channels.first() || msg.channel;
    const time = args[0];
    const winnerCount = args[1];
    const prize = args.slice(2).join(' ');
    if (!time || !winnerCount || !prize) {
      return msg.channel.send('Invalid arguments!');
    }

    await client.giveaways.start(channel, {
      time: ms(time),
      prize: prize,
      winnerCount: winnerCount,
      hostedBy: msg.author,
      messages: {
        giveaway: '🎉🎉 **GIVEAWAY** 🎉🎉',
        giveawayEnded: '🎉🎉 **GIVEAWAY ENDED** 🎉🎉',
        timeRemaining: 'Time remaining: **{duration}**!',
        inviteToParticipate: 'React with 🎉 to participate!',
        winMessage: 'Congratulations, {winners}! You won **{prize}**!',
        noWinner: 'Giveaway cancelled, no valid participations.',
      },
    });

    if (msg.channel !== channel) {
      msg.channel.send(`Giveaway started in ${channel}!`);
    } else {
      msg.delete();
    }
  },
};
