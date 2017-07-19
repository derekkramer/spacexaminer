const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/manifest', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/manifest.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
