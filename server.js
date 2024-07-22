const express = require('express');
const bodyParser= require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan= require('morgan');
const app = new express();

app.listen(3000, () => { console.log(`App running on port 3000`) });

app.use(morgan('dev'));

/*Security Headers*/
app.use(helmet())
/*Resource Sharing*/
app.use(cors())
/*JSON Input Handling*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import the routes
app.use('/api', require('./app/routes'));

module.exports = app