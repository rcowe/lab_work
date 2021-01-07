// Set-up
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const liveReload = require('livereload');
const connectLiveReload = require('connect-livereload');
// const methodOverride = require('method-override'); // allow us to override an HTTP Method.

// Middleware, this is what runs before our routes. It gives us access
app.use(connectLiveReload());
app.use(express.static('public'));

const reloadServer = liveReload.createServer();
reloadServer.watch(path.join(__dirname, 'public')); // __dirname is the current working folder

reloadServer.server.once('connection', () => {
  setTimeout(() => {
    reloadServer.refresh('/');
  }, 100);
});

// Listening
app.listen(PORT, () => {
  console.log(`Saving the world on port ${PORT}`);
});
