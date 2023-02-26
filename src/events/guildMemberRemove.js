module.exports = async (client, member) => {
  member.guild.channels.cache
    .find((channel) => channel.id === client.config.welcome_channel)
    .send(
      `**${member.user.tag}** (${member.user.id}) just left the server <:aimainasmh:564363881653338133>`,
    );
};
