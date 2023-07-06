const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const checkWorkingHours = (req, res, next) => {
const date = new Date();
const day = date.getDay();
const hour = date.getHours();

if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
} else {
    res.render('working-hours-message');
}
};

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', checkWorkingHours, (req, res) => {
res.render('home');
});

app.get('/services', checkWorkingHours, (req, res) => {
res.render('services');
});

app.get('/contact', checkWorkingHours, (req, res) => {
res.render('contact');
});

app.listen(4000, () => {
console.log('Server is running on port 4000');
});


// idk why j'arrive pas a appliquer le css, mouhim je l'ai mis lol 