const express = require('express');
const app = express();
const path = require('path');
const webRoutes = require(path.resolve(__dirname, './routes/webRoutes'));
const PORT = 3000;
const methodOverride = require('method-override');
const customSession = require(path.resolve(__dirname, './middlewares/sessionMiddleware'));
const session = require('express-session');
const cookieParser = require('cookie-parser');


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'topSecret',
    resave: true,
    saveUninitialized: true,
}))
app.use(cookieParser());
app.use(customSession);
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(webRoutes);


app.listen(PORT, console.log(`Starting server on port: ${PORT}`));
