module.exports = async (client) => {
  client.log.info(`Connected to ${client.user.username}`);
  client.user.setPresence({
    activities: [
      { name: `ai help [${client.guilds.cache.size}] https://github.com/aimaina`, type: 'PLAYING' },
    ],
  });
};
