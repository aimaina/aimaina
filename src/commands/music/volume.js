module.exports = {
  name: 'volume',
  category: 'Music',
  description: 'Change the music volume',
  aliases: ['v', 'vol'],
  execute: async (client, msg, args) => {
    const queue = client.distube.getQueue(msg);
    if (!queue) {
      return msg.channel.send('There is nothing playing!');
    }

    if (!args[0]) {
      return msg.channel.send(`Current volume: **${queue.volume}**%`);
    }

    const volume = parseInt(args[0]);
    if (isNaN(volume)) {
      return msg.channel.send('Invalid number');
    }

    queue.setVolume(volume);
    msg.channel.send(`Volume set to **${volume}**%`);
  },
};
