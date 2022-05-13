const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cookieParser())
app.use('/',require('./routes/router'));

dotenv.config({ path: './env/.env' });

app.listen(process.env.PORT, () => {
    console.log(`el servidor esta arriba en http://localhost:5000`);
});
