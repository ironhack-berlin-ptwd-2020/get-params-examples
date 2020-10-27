// app.js
const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send("Hello there.")
});

app.get('/about', (req, res) => {
  res.send("Hello there.")
});

app.get('/contact', (req, res) => {
  res.send("Hello there.")
});

app.get('/org/:organizationName', (req, res) => {

  console.log(req.params)

  res.send('(empty)')

  //res.send(req.params);
});


// provide input fields
app.get('/flight-search', (req, res) => {
  res.render('flight-form')
})

app.get('/flights/:depDest', (req, res) => {

  // ?startDate=2020-10-27&endDate=2020-12-12 ===> { startDate: '2020-10-27', endDate: '2020-12-12' }

  console.log("here is req.query", req.query) // optional parameters (e.g. sort)

  console.log("here is req.params", req.params) // required parameters

  res.render('flight-results', { depDest: req.params.depDest, startDate: req.query.startDate, endDate: req.query.endDate })

  //res.send(req.params);
});

app.listen(3000, () => console.log('App listening on port 3000!'));