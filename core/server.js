const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const app = express();
const port = process.env.PORT || 3000;

// Create livereload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, '../public'));

// Disable caching in development
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// Enable live reload in development
if (process.env.NODE_ENV !== 'production') {
  app.use(connectLiveReload());
}

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('LiveReload is watching:', path.join(__dirname, '../public'));
});
