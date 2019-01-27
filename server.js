const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //Get user's IP
    next();
});

app.get('/', function(req,res) {
  res.sendFile(__dirname +'/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
