const express = require('express');
const app = express();
const body = require('body-parser');
const requeSt = require('request');
const http = require('https');
const file = require('fs');


app.use(express.static('public'));
app.use(express.static('weather'));
app.use(body.urlencoded({extended: true}));
app.set('views-engine', 'ejs');


app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html');

});

app.post('/', function(req, res){
  const fnm = req.body.fname;
  const snm = req.body.sname;
  const eml = req.body.em;
  console.log("Server is working");

  var data = {
    members: [
      {
        email_address : eml,
        status : "subscribed",
        merge_fields:{
      FNAME : fnm,
      SNAME : snm
       }
      }
     ]
   };

const jsonData = JSON.stringify(data);

const url = 'https://us17.api.mailchimp.com/3.0/lists/c09b0346b3';

const options = {
  method:'POST',
  auth:'Ravinthiran:bea5229de3195f44b4713420e12b0f36-us17'
}

const request = http.request(url, options, function(response) {

  if (response.statusCode === 200)
  {
    res.sendFile(__dirname + '/public/success.html');
  }
  else
  {
    res.sendFile(__dirname + '/public/failure.html');
  }
  response.on('data', function(data){
    console.log(JSON.parse(data));
  });
});

request.write(jsonData);
request.end();
});

app.listen(process.env.PORT || 3000, function(req, res){
  console.log('Server is connected at port 3000');
});
