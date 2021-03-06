/* echo server */

const WebSocketServer = require('./dist/uws').Server;
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    ws.send(message, { binary: Buffer.isBuffer(message) });
  });
});
