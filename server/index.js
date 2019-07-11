const express = require('express');

const app = express();
const port = 3020;

app.use(express.static(__dirname + './../client/public'));

app.listen(port,() => console.log('serving at port ' + port));