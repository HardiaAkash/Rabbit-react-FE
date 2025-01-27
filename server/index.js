const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const routes = require("./router");

const app = express();

// Set security HTTP headers with a custom CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameSrc: ["'self'", "https://www.google.com", "https://maps.googleapis.com"],
        scriptSrc: ["'self'", "https://maps.googleapis.com", "https://www.google.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https://maps.googleapis.com"],
      },
    },
    crossOriginEmbedderPolicy: false, // Disable this if using cross-origin resources
  })
);

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

// Sanitize request data
app.use(xss());
app.use(mongoSanitize());

// Gzip compression
app.use(compression());

// Enable CORS
const corsOptions = {
  origin: "*", // Replace '*' with your frontend's domain for better security
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// v1 API routes
app.use("/api", routes);

// Serve static files for the client
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Server Listening to port 3000");
});

module.exports = app;
