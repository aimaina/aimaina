module.exports = {
  name: 'createbackup',
  category: 'Admin',
  description: 'Create backup of the server',
  ownerOnly: true,
  aliases: ['createback', 'backup'],
  async execute(client, msg, _args) {
    const backupID = await client.backup.create(msg.guild, {
      maxMessagesPerChannel: 99999999,
      jsonBeautify: true,
      saveImages: 'base64',
    });
    msg.channel.send(`Backup created! Backup ID: ${backupID}`);
  },
};
