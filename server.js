var express = require('express');
var app = express();
var path = require('path');
var MyApp = require('./source/components/MyApp.js').default;
var renderToString = require('react-dom/server').renderToString;
var React = require('react');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('*', function (req, res) {
    MyApp.fetchData().then(data => {
        return data.json();
    }).then(x => {
        const markup = renderToString(<MyApp films={x.results} />);
        res.render('index',{markup});
    });
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
