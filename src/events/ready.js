module.exports = async (client) => {
    client.log.info(`Connected to ${client.user.tag}`);
    client.user.setPresence({ activities: [{ name: `ai help [${client.guilds.cache.size}] https://github.com/aimaina`, type: 'PLAYING' }] });
};
