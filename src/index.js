var express = require('express');
const routes =require('./routes');

var app = express();

app.use(routes);

app.listen(5000,()=>{
    console.log('> debug: listening on port 5000.');
});