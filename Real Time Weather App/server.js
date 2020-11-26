const express = require('express');
const app = express();
const http = require('https');
const body = require('body-parser');

app.use(body.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {
  const query = req.body.city;
  const lin = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid=813f7619d8e28ef6c94184622bcedd73&units=metric';
  http.get(lin, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const Weather = JSON.parse(data);
      const humi = Weather.main.temp;
      const hum = Weather.weather[0].description;
      const coun = Weather.sys.country;
      const ic = Weather.weather[0].icon;
      const image = "https://openweathermap.org/img/wn/" + ic + "@2x.png"
      res.write("<p>The weather condition :" + " " + hum + " " + "and" + " " + "The Temperature is" + " " + humi + "C" + "<p>");
      res.write("The Country is" + " " + coun);
      res.write("<p><img src =" + image + "> <p>");
      res.send();
      console.log(Weather);
    });
  });
});
app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("server is connected at port-3000");
})
