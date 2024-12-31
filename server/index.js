const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");  // XSS cleaning middleware
const mongoSanitize = require("express-mongo-sanitize");  // MongoDB sanitization middleware
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const routes = require("./router");

const app = express();

// Remove specific headers to prevent issues with HTTP testing
app.use((req, res, next) => {
  res.removeHeader('Cross-Origin-Opener-Policy');
  res.removeHeader('Origin-Agent-Cluster');
  next();
});

// set security HTTP headers
app.use(helmet());

// Sanitize request data
app.use(xss());  // Prevents XSS attacks by sanitizing input
app.use(mongoSanitize());  // Prevents NoSQL injections by sanitizing MongoDB operators

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable CORS
const corsOptions = {
  origin: "*", // you can restrict this to your frontend's domain instead of '*'
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// v1 api routes
app.use("/api", routes);

// Serve static frontend files
app.use(express.static("../client/build"));

// Serve the frontend's index.html for any unknown route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..',"client", "build", "index.html"));
});

// Start server
app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});

module.exports = app;
