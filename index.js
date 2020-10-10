const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require('body-parser')

const {
    controllerHome,
    middlewareHome,
    controllerAbout,
    middlewareAbout,
    controllerBlog,
    middlewareBlog,
    controllerError,
    middlewareError
} = require("./router-modules");

// ────────────────────────────────────────────────────────────────────────────────

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ────────────────────────────────────────────────────────────────────────────────

app.use(helmet());

// ────────────────────────────────────────────────────────────────────────────────

const mongoSetting = require("./model/db-connect");
mongoSetting(app);

// ────────────────────────────────────────────────────────────────────────────────

const RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 200,
    delayMs: 0,
    message: "Too many accounts created from this IP, please try again after 15 minute"
});
app.use(limiter);

// ────────────────────────────────────────────────────────────────────────────────

app.get('/home', middlewareHome, controllerHome);
app.get('/about', middlewareAbout, controllerAbout);
app.get('/blog', middlewareBlog, controllerBlog);


app.get('/*', middlewareError, controllerError)



// ────────────────────────────────────────────────────────────────────────────────
app.listen(9009, (err) => null);