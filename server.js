var express = require('express');

// create out app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
	// body...
	console.log('express server is up');
});

