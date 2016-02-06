var express = require('express');
var app = express();
var PORT = 8090;

app.use('/static', express.static('public'));

app.use('/js', express.static('public/js'));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});