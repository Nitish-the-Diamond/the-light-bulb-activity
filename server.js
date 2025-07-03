const express = require('express');
const path = require('path'); // Required for path manipulation
const app = express();
const port = 3000;

// Serve static files from a 'public' directory (optional, but good practice)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to send an HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});