const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');

require('dotenv').config();

require('./src/config/db')();
const app = express();


// Body Parser
app.use(express.json())


app.use('/api/contacts', require('./src/routes/contacts'));
app.use('/api/user', require('./src/routes/users'));

// app.use(errorHandler);

// const port = process.env.PORT ? process.env.PORT : 5000;
const port = 3000;


app.listen(port, () => console.log(`Listening on port ${port}`));