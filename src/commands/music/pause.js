module.exports = {
  name: 'pause',
  category: 'Music',
  description: 'Pause the currently playing music',
  aliases: ['hold'],
  execute: async (client, msg, _args) => {
    const queue = client.distube.getQueue(msg);
    if (!queue) {
      return msg.channel.send('There is nothing playing!');
    }

    if (queue.pause) {
      queue.resume();
      return msg.channel.send('Resumed the queue!');
    }

    queue.pause();
    msg.channel.send('Paused the queue!');
  },
};
