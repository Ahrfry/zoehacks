var cors = require('cors')
var express = require('express');
var app = express();

app.use(cors())
app.use(express.json())

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/coors', function (req, res) {
    //result = req.body.A*req.body.B;
    console.log(req.body);
    res.send('{"ok":"this came from server"}');
})

// This responds a POST request for the homepage
app.post('/upload', function (req, res) {
   //result = req.body.A*req.body.B;
   console.log(JSON.stringify(req.body).length);
   res.send('{"ok":"this came from server"}');
})

// This responds a DELETE request for the /del_user page.
app.delete('/', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/coors', function(req, res) {   
   console.log("Got a GET request for /coors");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})