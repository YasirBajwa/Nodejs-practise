const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');

require('./src/config/db')();
const app = express();

const port = 3001;
// config env file
require('dotenv').config();


// Body Parser
app.use(express.json())


app.use('/api/contacts', require('./src/routes/contacts'));
app.use('/api/user', require('./src/routes/users'));

app.use(errorHandler);

// const port = process.env.PORT ? process.env.PORT : 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));