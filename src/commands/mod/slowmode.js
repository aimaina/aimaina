module.exports = {
  name: 'slowmode',
  description: 'Change the slowmode in the current channel or a specified channel',
  aliases: ['slow'],
  usage: '[time] [channel]',
  category: 'Mod',
  ownerOnly: true,
  execute(_client, msg, args) {
    const time = args[0];
    const channel = msg.mentions.channels.first() || msg.channel;
    if (!time) {
      return msg.channel.send('Please specify a time!');
    }
    if (isNaN(time)) {
      return msg.channel.send('Please specify a valid time!');
    }
    if (time > 21600) {
      return msg.channel.send('Please specify a time less than 21600 seconds!');
    }
    channel.setRateLimitPerUser(time);
    msg.channel.send(`Set the slowmode in ${channel} to ${time} seconds!`);
  },
};
