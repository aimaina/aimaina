module.exports = {
  name: 'shuffle',
  category: 'Music',
  description: 'Shuffle the music queue',
  execute: async (client, msg, _args) => {
    const queue = client.distube.getQueue(msg);
    if (!queue) {
      return msg.channel.send('There is nothing playing!');
    }

    queue.shuffle();
    msg.channel.send('Shuffled!');
  },
};
