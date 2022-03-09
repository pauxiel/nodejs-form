const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const homeController = require('./controllers/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const memberRoutes = require('./routes/member');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(memberRoutes);
app.use(homeController.getHome);
app.use(errorController.get404);

app.listen(3000);