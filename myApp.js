var express = require("express");
var app = express();

// --> 7)  Mount the Logger middleware here

// app.use(function middleware(req, res, next) {
//   let result = req.method + " " + req.path + " - " + req.ip;
//   console.log(result);
//   req.time = new Date().toString();
//   next();
// });

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */
// console.log("Hello World");

/** 2) A first working Express Server */
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

/** 3) Serve an HTML file */
// app.get("/", (req, res) => {
//   let absolutePath = __dirname + "/views/index.html";
//     res.sendFile(absolutePath);
// });

/** 4) Serve static assets  */
// app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   let absolutePath = __dirname + "/views/index.html";
//     res.sendFile(absolutePath);
// });

/** 5) serve JSON on a specific route */

// app.get("/json", (req, res) => {
//     res.send({"message": "Hello json"});
// });
/** 6) Use the .env file to configure the app */
//  app.get("/json", (req, res) => {
//    if(process.env.MESSAGE_STYLE==='uppercase'){
//      let msg = "Hello json".toUpperCase();
//      res.send({"message": msg});
//    }
//    else{
//      res.send({"message": "Hello json"});
//    }
// });

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
// app.get("/json", (req, res) => {
//   console.log("This is from GET route handler for /json");
//   res.send({message:"This is from GET route handler for /json"});
// });

/** 8) Chaining middleware. A Time server */
app.get("/now", middleware, (req, res) => {
  res.send({ time: req.time });
});

/** 9)  Get input from client - Route parameters */

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
