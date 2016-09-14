
  var express = require('express');
  var path = require('path');
  var jade = require('jade');
  var app = express();

  // ROUTING
  // app.get('/home', function (req, res) {
  //   res.end('Hello World!');
  // });

  // STATIC CONTENT
  // app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

  // JADE TEMPLATE
  console.log(process.argv[3]);
  app.set('views', process.argv[3]);
  app.set('view engine', 'jade');
  app.get('/home', function (req, res) {
    res.render('index', {
        date: new Date().toDateString(),
    });
  });


  app.listen(process.argv[2]);
