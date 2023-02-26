module.exports = {
  name: 'leave',
  category: 'Music',
  description: 'Leave the current voice channel',
  aliases: ['disconnect'],
  execute: async (client, msg, _args) => {
    client.distube.voices.leave(msg);
    msg.channel.send('Left voice channel');
  },
};
