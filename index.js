// Simple Spotify API Example

const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/api/search/:query', async (req, res) => {
    const query = req.params.query;
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    try {
        const response = await axios.get(url, {
            headers: { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error occurred while fetching data.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});