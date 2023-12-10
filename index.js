const cors = require('cors');
const fetch = require('node-fetch');
const express = require('express');

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/orders', async (req, res) => {
  const limit = req.query.limit || 50;
  const offset = req.query.offset || 0;
  const mode = req.query.mode || 'extended';
  let cookie = req.headers.usercookie;

  const apiUrl = `https://www.e-food.gr/api/user/orders/history?limit=${limit}&offset=${offset}&mode=${mode}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Cookie': cookie,
        'authority': 'www.e-food.gr',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'accept-language': 'el-GR,el;q=0.7',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Brave";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

exports.emoodapi = app;