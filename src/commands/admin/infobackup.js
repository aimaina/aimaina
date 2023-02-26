module.exports = {
  name: 'infobackup',
  category: 'Admin',
  description: 'Get info about a backup',
  ownerOnly: true,
  aliases: ['infoback'],
  usage: '[backupID]',
  async execute(client, msg, args) {
    const backupID = args[0];
    if (!backupID) {
      return msg.channel.send('You must specify a valid backup ID!');
    }

    const backupInfo = await client.backup.fetch(backupID);
    const date = new Date(backupInfo.data.createdTimestamp);
    const embed = new MessageEmbed()
      .setAuthor('Backup Information')
      .addField('Server ID', backupInfo.data.guildID)
      .addField('Server Name', backupInfo.data.guildName)
      .addField('Backup Size', backupInfo.size + ' kb')
      .addField('Created At', date.toUTCString());

    msg.channel.send(embed);
  },
};
