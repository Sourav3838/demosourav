const http = require('http');
//importing finalques2neha.js from the same folder
const routes = require('./finalques2neha');
//server created and is alloted a eventlistener
//this server will listen to port 3000
http.createServer(routes.listener).listen(3000);
