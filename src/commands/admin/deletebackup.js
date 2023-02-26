module.exports = {
  name: 'deletebackup',
  category: 'Admin',
  description: 'Delete backup of the server',
  ownerOnly: true,
  aliases: ['deleteback', 'backup'],
  async execute(client, msg, _args) {
    const backup = await client.backup.delete(msg.guild);
    msg.channel.send(`Backup deleted! Backup ID: ${backup.id}`);
  },
};
