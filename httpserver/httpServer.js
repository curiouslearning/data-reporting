const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())

// Example of GET endpoint
app.get('/',  (req, res) => {
  res.send('Hello World!')
});

// Example of POST endpoint
app.post('/api/curious/', (req, res) => {
  // example sending back the body (json) sent to the endpoint
  res.status(202).send(`\nThe request body sent was:\n\n${JSON.stringify(req.body)}}\n\n`);
});

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!')
});
