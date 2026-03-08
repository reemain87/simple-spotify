const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/search', async (req, res) => {
    const { query } = req;
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${query.q}&type=track`, { headers: { 'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}` }});
    res.json(response.data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});