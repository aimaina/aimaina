module.exports = {
  name: 'resume',
  category: 'Music',
  description: 'Resume the currently playing music',
  aliases: ['unpause'],
  execute: async (client, msg, _args) => {
    const queue = client.distube.getQueue(msg);
    if (!queue) {
      return msg.channel.send('There is nothing playing!');
    }

    if (queue.pause) {
      queue.resume();
      return msg.channel.send('Resumed the queue!');
    }

    msg.channel.send('The queue is already playing!');
  },
};
