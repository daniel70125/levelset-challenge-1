require('dotenv').config();
let express = require('express');
let app = express();

const SERVER_PORT = 4010;

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))