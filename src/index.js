const { readdir } = require('fs').promises;
const { Client, Collection } = require('discord.js');
const Logger = require('leekslazylogger');
const { DisTube } = require('distube');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const StarboardsManager = require('discord-starboards');
const { GiveawaysManager } = require('discord-giveaways');

const client = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384],
  disableEveryone: true,
  autoReconnect: true,
});

client.log = new Logger();
client.config = require('./config.json');
client.afk = new Collection();
client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new YtDlpPlugin(),
    new SpotifyPlugin({
      emitEventsAfterFetching: true,
    }),
    new SoundCloudPlugin(),
  ],
  youtubeDL: false,
});
client.starboard = new StarboardsManager(client);
client.giveawaysManager = new GiveawaysManager(client, {
  storage: './giveaways.json',
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: '#FF0000',
    reaction: '🎉',
  },
});

['aliases', 'commands'].forEach((x) => (client[x] = new Collection()));

const init = async () => {
  const events = await readdir('./events');
  events.forEach((file) => {
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
  });

  const categories = await readdir('./commands');
  for (const category of categories) {
    const commands = await readdir(`./commands/${category}`);
    for (const file of commands) {
      await client.commands.set(file.split('.')[0], require(`./commands/${category}/${file}`));
    }
  }
};

init().then((r) => r);

process.on('unhandledRejection', (err) => {
  client.log.error(err);
});

client.on('error', (err) => {
  client.log.error(err);
});

// distube events
client.distube.on('playSong', (queue, song) => {
  queue.textChannel.send(
    `Playing **${song.name}** (${song.formattedDuration}) requested by ${song.user}`,
  );
});

client.distube.on('addSong', (queue, song) => {
  queue.textChannel.send(
    `Added **${song.name}** (${song.formattedDuration}) to the queue by ${song.user}`,
  );
});

client.distube.on('addList', (queue, playlist) => {
  queue.textChannel.send(
    `Added ${playlist.songs.length} songs from playlist **${playlist.name}** to the queue`,
  );
});

client.distube.on('searchNoResult', (msg, query) => {
  msg.channel.send(`No results found for \`${query}\``);
});

client.distube.on('empty', (channel) => {
  channel.send('Everyone has left the VC, so I am leaving as well!');
});

client.distube.on('finish', (queue) => {
  queue.textChannel.send('Queue has finished');
});

client.distube.on('error', (channel, err) => {
  client.log.error(err);
  channel.send('```' + err + '```');
});

client.login(client.config.token);
