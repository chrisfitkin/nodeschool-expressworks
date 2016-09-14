
  var express = require('express');
  var path = require('path');
  // var jade = require('jade');
  // var bodyParser = require('body-parser');
  // var stylus = require('stylus');
  var crypto = require('crypto');
  var app = express();

  app.param('id', function(req, res, next, id) {
    req.id = id;
    next();
  })
  app.put('/message/:id', function(req,res) {
    res.end(crypto.createHash('sha1')
              .update(new Date().toDateString() + req.id)
              .digest('hex'));
  });

  app.listen(process.argv[2]);
