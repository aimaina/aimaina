module.exports = {
  name: 'listbackup',
  category: 'Admin',
  description: 'List all server backups',
  ownerOnly: true,
  aliases: ['listback', 'listbackups'],
  async execute(client, msg, _args) {
    const backups = await client.backup.list();
    msg.channel.send(`Backups: ${backups.map((backup) => backup.id).join(', ')}`);
  },
};
