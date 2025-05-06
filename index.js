require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const app = express();
const applyMidleware = require("./middlewares/middlewares");
const applyRouter = require("./routers/routes");
const dbConnection = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");

//serve client side file path
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "./client/dist/")));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        process.env.CLIENT,
        "https://www.pagespeed-mod.com",
        "https://www.google-analytics.com",
        "https://www.googletagmanager.com",
      ],
    },
  })
);

//apply midflewares
applyMidleware(app);

//apply routes
applyRouter(app);

//database connection
// dbConnection();

//error handler
errorHandler(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

app.listen(process.env.PORT || 3300, () => {
  console.log(`Server Started at http://localhost:${process.env.PORT}.`);
});
