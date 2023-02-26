module.exports = {
  name: 'seek',
  category: 'Music',
  description: 'Seek to a certain part in the current song',
  execute: async (client, msg, args) => {
    const queue = client.distube.getQueue(msg);
    if (!queue) {
      return msg.channel.send('There is nothing playing!');
    }

    if (!args[0]) {
      return msg.channel.send('Please provide position in seconds to seek to');
    }

    const position = Number(args[0]);
    if (isNaN(position)) {
      return msg.channel.send('Invalid number');
    }

    queue.seek(position);
    msg.channel.send(`Now playing at **${position}**!`);
  },
};
