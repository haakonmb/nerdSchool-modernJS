const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/tvshow', tvShowRouter);


app.get('/', function( request, response) {
	response.send('Hello world');
});

app.listen(port, () => {
	console.log(`Expample listeninng on ${port}`);
});
