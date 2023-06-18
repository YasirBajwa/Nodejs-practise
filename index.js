const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
// const dotenv = require('dotenv').config();

const port = 3001;

app.use(express.json());

app.use('/api/contacts', require('./routes/contacts'));

app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}`));