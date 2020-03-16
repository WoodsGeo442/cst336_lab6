const express = require("express");
const app = express();
app.use(express.static('css'));
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/home", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

app.get("/venus", function(req, res){
    res.render("venus.html");
});

app.get("/earth", function(req, res){
    res.render("earth.html");
});

app.get("/mars", function(req, res){
    res.render("mars.html");
});

app.get("/jupiter", function(req, res){
    res.render("jupiter.html");
});

app.get("/saturn", function(req, res){
    res.render("saturn.html");
});

app.get("/uranus", function(req, res){
    res.render("uranus.html");
});

app.get("/neptune", function(req, res){
    res.render("neptune.html");
});

/* The handler for undefined routes */
app.get("*", function(req, res){
   res.send("<h2 style='color: red;'> Sorry, Page not found !</h2>"); 
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has been started");
})
