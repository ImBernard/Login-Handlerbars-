var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, '/public')));

app.get('/json', function (req, res) {
  res.sendFile(__dirname +"/record.json");
});
app.use('/record', express.static(__dirname + '/record.json'));
app.get('/',function(req,res) {
	res.sendFile(__dirname + "/assignemtn CS 305 .html");
});

//192.168.254.3-HOME

app.listen(3000, function() {
	console.log('Port 3000');

});