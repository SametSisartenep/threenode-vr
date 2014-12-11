// Application Core

var http = require('http'),
  fs = require('fs'),
  util = require('util');

function sendFile ( file, res ) {
  fs.exists(file, function ( exist ) {
    if (exist) {
      fs.readFile(file, function ( err, data ) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
      });

      console.log('File: ' + file + ' correctly sent.');
    } else {
      console.log(file + ' not found. 404');
      res.writeHead(404, {'Content-Type' : 'text/html'});
      res.end('<h1>ERROR 404. File [' + file + '] NOT FOUND</h1>');
    }
  });
}

function findFileRoute ( file ) {
  for (var route in routes) {
    if (route === file) {
      console.log('File: ' + route + ' found.');
      return routes[route];
    } else {
      if (file) {
        return false;
      }
    }
  }
}

function handleConnection ( req, res ) {
  var file = '';

  file = findFileRoute(req.url);

  if (req.method === 'GET') {
   
    if (!file) {
      console.log(file + ' not found. 404');
      res.writeHead(404, {'Content-Type' : 'text/html'});
      res.end('<h1>ERROR 404.' + req.url + ' NOT FOUND</h1>');
    } else {
      sendFile(file, res);
    }
  } else if (req.method === 'POST') {
    console.log('POST request received.');
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>This service is under development. Sorry :(</h1>');
  } else {
    console.log(req.method + ' request received.');
    res.writeHead(405, {'Content-Type' : 'text/html'});
    res.end('<h1>ERROR 405. Method ' + req.method + ' Not Allowed</h1>');
  }
}

var AppCore = function AppCore () {
  this.PORT = 1337;
  this.routes = require('./routes.json');
  this.server = {};
};

AppCore.prototype.start = function start ( port ) {
  var self = this;

  this.PORT = port || self.PORT;
  this.server = http.createServer(handleConnection).listen(this.PORT, function () {
    util.log('Bubbles running at 127.0.0.1:' + self.PORT);
  });
};

module.exports = exports = new AppCore();

