// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 1. Serve everything in "indexes/" as static files:
app.use(express.static(path.join(__dirname, 'indexes')));

// 2. Fallback so that requests to “/” (and any SPA routes) return index.html:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexes', 'home.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});