const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+'/index.html');
})

app.post("/", function(req, res){
  const bill = req.body.bil;
  const currency = req.body.bi;
  const service =  req.body.bii;
  const hotelType = req.body.biii;
  const hotelEnv = req.body.biiii;
  const dishFactor = req.body.biiiii;
  const person = req.body.balls;


  const bc = bill * currency;
  const bcs = (bc * service) / person;
  const hten = hotelType * hotelEnv;
  const dish = hten * dishFactor;
  const total = dish * bcs;

  if(person == 0){
    console.log("Please give scale of number i.e, 1-10");
  }
  else{

  }

  res.send("From your prefered currency, you have to give: " + total + " as tips ");

})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is connected at port 3000");
})
