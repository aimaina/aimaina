module.exports = async (client, member) => {
  member.guild.channels.cache
    .find((channel) => channel.id === client.config.welcome_channel)
    .send(
      `**${member.user.username}** (<@${member.user.id}>) just joined the server! <:aimainawave:564363881942876165> (Member #${member.guild.memberCount})`,
    );
  member.roles.add(client.config.welcome_role);
};
