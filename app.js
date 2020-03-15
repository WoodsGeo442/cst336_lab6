const express = require("express");
const app = express();
app.use(express.static('css'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

app.get("/venus", function(req, res){
    res.send("This will be Venus web page!");
});

/* The handler for undefined routes */
app.get("*", function(req, res){
   res.send("<h2 style='color: red;'> Sorry, Page not found !</h2>"); 
});

// //server listener
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Running Express Server...");
// });

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has been started");
})