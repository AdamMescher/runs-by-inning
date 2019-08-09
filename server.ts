import express = require('express');
const app: express.Application = express();

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});