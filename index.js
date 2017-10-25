const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: 'buddy'})
});

// Use Heroku env/port(prod) OR 5000(dev)
app.listen(process.env.PORT || 5000);
