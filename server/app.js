const express = require('express');
require('isomorphic-fetch');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get('/api/user', async (req, res) => {
    try {
      const response = await fetch('https://leetcode.com/api/user');
      const data = await response.text();
      console.log('Response body:', data); // Log the response body
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  app.get('/api/submissions', async (req, res) => {
    try {
      const response = await fetch('https://leetcode.com/api/submissions');
      const data = await response.text();
      console.log('Response body:', data); // Log the response body
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
