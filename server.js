const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');
const app = new express();


// Определение схем и моделей для работы с базой данных

const Schema = mongoose.Schema;
const userSchema = new Schema({ 
    /* ваша схема */
    userName: String,
    userEmail: String,
    userPassword: String,
    userSex: String, 
    userBirthday: Date, 
});
const User = mongoose.model('User', userSchema);


app.use(express.bodyParser());
app.use('/api', router);
app.use(cors());
app.options('*', cors());


// Настройка маршрутов API
app.get('/api/user', (req, res) => {
  User.find((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, (err) => {
    if (err != null) {
        console.log(err);
    } 
    else {
        console.log('Сервер запущен на порту 3000');
    }
});

// Подключение к MongoDB
mongoose.connect('mongodb://localhost/3000', { useNewUrlParser: true });