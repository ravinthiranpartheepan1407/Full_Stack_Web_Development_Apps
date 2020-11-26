const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: true},{ useNewUrlParser: true }));

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/Ravinthiran_Partheepan_WikiDB", function (error) {
    if (error)
     {
    console.error(error);
  }
    else {
      console.log('mongo connected');
    }
});

const articleSchema = {
  Title: String,
  Conference: String,
  Copyright_ID: String,
  Type: String
};

const article = mongoose.model('article', articleSchema);

app.get("/", function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.route("/")

.get(function(req, res){
  article.find(function(err, foundArticl){
    if(!err){
      res.render(foundArticl);
    }
    else{
      res.send(err);
    }
  });
})

.post(function(req, res){
  const newArticles = new article({
    Title: req.body.title,
    Conference: req.body.conference,
    Type: req.body.type
  });


 newArticles.save(function(err, foundArticl){
  if(!err){
    res.send(foundArticl);
  }
  else{
    res.send(err);
  }
});
});

// .delete(function(req, res){
//   article.deleteMany(function(err){
//     if(!err){
//       res.send("Successfully deleted All the Data");
//     }
//     else{
//       res.send(err);
//     }
//   });
// })

// app.get("/articles", );
//
// app.post("/articles", );

// app.delete("/articles", );

app.route("/articleTitle")
.get(function(req,res){
  article.findOne({Title: req.params.articleTitle}, function(err, foundArticl){
    if(!err){
      res.send(foundArticl);
    }
    else{
      res.send("The requested query is not found");
    }
  });
})
.put(function(req, res){
  article.update({Title: req.params.articleTitle},
  {title: req.body.title, conference: req.body.confernce, type: req.body.type},
  {overwrite: true},
  function(err){
    if(!err){
      res.send("Successfully Updated the article");
    }
  }
);
})
.patch(function(req, res){
  article.update({Title: req.params.articleTitle},
  {$set: req.body},
  function(err){
    if(!err){
      res.send("Successfully updated the query");
    }
    else{
      res.send(err);
    }
  }
);
})

.delete(function(req, res){
  article.deleteOne({Title: req.params.articleTitle},
  function(err){
    if(!err){
    res.send("Succesffuly deleted the query");
  }
  else{
    res.send(err);
  }
}
);
});



app.listen(process.env.PORT || 3000, function(){
  console.log("Server is connected at 3000 port");
})
