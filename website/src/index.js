const express = require('express');
const app = express();
const path = require('path');
const webRoutes = require(path.resolve(__dirname, './routes/webRoutes'));
const PORT = 3000;

app.use(express.static('public'));
app.use(webRoutes);
app.listen(PORT, console.log(`Starting server on port: ${PORT}`));