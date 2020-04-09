#!/usr/bin/env node
const net = require('net');
const yargs = require('yargs');

yargs
  .usage('$0 [-p port] <command>')
  .strict()
  .version()
  .help()
  .option('port', {
    type: 'number',
    alias: 'p',
    default: 4343,
    desc: 'TCP port that command server is listening to',
    global: true,
  })
  .command({
    command: 'toggle',
    desc: 'Toggles playback',
  })
  .demandCommand();

const port = yargs.argv.port;
const command = yargs.argv._[0];

const socket = net.createConnection(port, () => {
    socket.write(command);
    socket.end();
});
