'use strict';

const http = require('http');
const app = require('../src/app');

const port = 3000;

app.set('port', port);
app.set('view engine', 'ejs');

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);

console.log('\x1B[2J\x1B[0f'); //clear console
console.log("Server iniciado na porta " + port);
console.log('\n');

function onError(error){
  if(error.syscall !== 'listen') throw error;

  const bind = "Port " + port;

  switch(error.code){
    case 'EACCES':
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
