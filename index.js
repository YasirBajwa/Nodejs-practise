const express = require('express');
const app = express();
// const dotenv = require('dotenv').config();

const port = 3001;

app.use('/api/contacts', require('./routes/contacts'));

app.listen(port, () => console.log(`Listening on port ${port}`));