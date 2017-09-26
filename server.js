const express = require("express")
const bodyParser = require("body-parser")
const logger = require("morgan")
const mongoose = require("mongoose")

mongoose.Promise = Promise

const port = process.env.PORT || 3000;

const app = express()

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static("public"))

// Database configuration for mongoose
// db: newsscrape

const local_db = "mongodb://localhost/nytreact"

//check if HEROKU then use environment variable to connect to db else use local db
if(process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI, function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("Mongoose connection successful.");
        }
    });
}
else{
    mongoose.connect(local_db, function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("Mongoose connection successful.");
        }
    });
}
// Hook mongoose connection to db
const db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

require("./routes/routing")(app, db);


// Listen on port 3000
app.listen(port, function() {
    console.log(`Listening on PORT ${port}`);
});
