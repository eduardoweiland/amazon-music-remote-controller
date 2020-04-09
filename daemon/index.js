const net = require('net');
const WebSocket = require('ws');
const config = require('./config');

const wsServer = new WebSocket.Server({ port: config.wsPort });

function broadcast(data) {
  wsServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(data.toString());
      }
  });
}

const cmdServer = net.createServer(c => c.on('data', broadcast)).listen(config.cmdPort);

console.log('WebSocket waiting for browser extension on', wsServer.address());
console.log('TCP server waiting for commands on', cmdServer.address());
