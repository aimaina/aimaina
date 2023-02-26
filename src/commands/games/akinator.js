const akinator = require('discord.js-akinator');

module.exports = {
  name: 'akinator',
  category: 'Games',
  description: 'Play Akinator',
  async execute(_client, msg, _args) {
    akinator(msg, {
      language: 'en',
      childMode: true,
      useButtons: true,
    });
  },
};
