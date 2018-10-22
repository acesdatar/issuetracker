var body_parser = require('body-parser');
var express = require('express');

var port = 8080 || 8090
var app = express();

app.use(express.static('public'));
app.get('/index.htm', (req, res) => {
    res.sendFile(__dirname + "/" + "index.htm")
})

app.get('/process_get', (req, res) => {
    response = {
        username: req.query.username,
        password: req.query.password
    };
    console.log(response);
    res.end(JSOn.stringify(response));
})
var logger = (req, res, next) => {
    console.log("This is a logger!!!");
}
var requestTime = (req, res, next) => {
    req.requestTime = Date.now();
   next();
}


// app.use(requestTime);

// app.get('/', (req, res) => {
//     var responseText = 'Hello World<br>';
//     responseText += '<small>Requested at: ' + req.requestTime + '</small>';
//     res.send(responseText);
// });

// app.post('/', (res, req) => {
//     console.log("This is post");
//     res.send("Hello POST");
// });





















var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`App is listening at http://${host}:${port}`);
    console.log("App running on %s:%s", host, port);
});