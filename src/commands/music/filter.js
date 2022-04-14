module.exports = {
    name: 'filter',
    category: 'Music',
    description: 'Set filters for the music',
    aliases: ['filters'],
    execute: async (client, msg, args) => {
      const queue = client.distube.getQueue(msg);
      if (!queue) {
        return msg.channel.send('There is nothing playing!');
      }

      if (!args[0]) {
        return msg.channel.send(`Current filter: **${queue.filters.join(', ') || 'none'}**`);
      }

      if (args[0] === 'off' && queue.filters.length || args[0] === 'none' && queue.filters.length) {
        queue.setFilter(false);
      } else if (Object.keys(client.distube.filters).includes(args[0])) {
        queue.setFilter(args[0]);
      } else {
        return msg.channel.send(`Invalid filter. Available filters: ${Object.keys(client.distube.filters).join(', ')} (use "none" or "off to remove filter)`);
      }

      msg.channel.send(`Set current filter to **${queue.filters.join(', ') || 'none'}**`);
    }
};
