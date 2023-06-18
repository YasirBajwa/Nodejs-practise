const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');

require('./src/config/db')()

const app = express();
// const helmet = require('helmet');
// const xss = require('xss-clean');
// const mongoSanitize = require('express-mongo-sanitize');
// const cors = require('cors');
// const passport = require('passport');
// const bodyParser = require('body-parser');

// const dotenv = require('dotenv').config();

const port = 3001;

// config env file
// require('dotenv').config();

// connect to database


// Body Parser
app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: true }));

// XXS Protection & Sanitization
// app.use(xss());
// app.use(mongoSanitize());

// enabling all CORS
// app.use(cors());
// app.options('*', cors());


app.use('/api/contacts', require('./src/routes/contacts'));

app.use(errorHandler);

// const port = process.env.PORT ? process.env.PORT : 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));