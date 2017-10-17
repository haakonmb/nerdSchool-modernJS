const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/', function( request, response) {
	response.send('Hello world');
});

app.listen(port, () => {
	console.log(`Expample listeninng on ${port}`);
});
