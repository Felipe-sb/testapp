const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 5000
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser())
app.use(
    session({
        secret: 'secret key',
        resave: false,
        saveUninitialized: true,
    })
);
app.use('/', require('./routes/router'));
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})

app.listen(PORT, () => {
    console.log(`el servidor esta arriba`);
});
