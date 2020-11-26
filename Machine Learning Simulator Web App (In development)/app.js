const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
})

// app.get('/clustering.html', function(req, res){
//   res.sendFile(__dirname+'/clustering.html');
// })

app.post('/', function(req, res){
  res.sendFile(__dirname+'/public/clustering.html');
})

app.get('/clustering.html', function(req, res){
  const instance = req.body.datasss;
  const instances = req.body.datass;
  const ds = req.body.dataa;
  const dss = req.body.dataaa;
  console.log(instance);
})

app.post('/bayes_classifier_ravinthiran_partheepan', function(req, res){
  res.sendFile(__dirname+'/public/bayes.html');

})

app.post('/adaboosting_ravinthiran_partheepan', function(req, res){
  res.sendFile(__dirname+'/public/ada.html');
})

app.post('/neural_network_ravinthiran_partheepan', function(req, res){
  res.sendFile(__dirname+'/public/neuralnetwork.html');
})

app.post('/multiple_linear_regression_ravinthiran_partheepan', function(req, res){
  res.sendFile(__dirname+'/public/regression.html');
})

app.post('/hidden_markov_model_ravinthiran_partheepan', function(req, res){
  res.sendFile(__dirname+'/public/hmm.html');
})




app.listen(process.env.PORT || 3000, function(){
  console.log("Server is connected at port 3000");
})
