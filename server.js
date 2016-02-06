var express = require('express');
var PORT = process.env.PORT || 8090;
var app = express();


app.use('/static', express.static('public'));

app.use('/js', express.static('public/js'));

app.get('/register', function(req, res) {
  res.sendFile(process.cwd() + "/public/register.html");
});

app.get('/dashboard', function(req, res) {
  res.sendFile(process.cwd() + "/public/dashboard.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});
