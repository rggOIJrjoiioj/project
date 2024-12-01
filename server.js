const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Массив для хранения полученных данных
const receivedData = [];

// Endpoint для обработки данных формы
app.post('/submit', (req, res) => {
    const { fio, phone, mark, for_whom } = req.body;
    const dataEntry = { fio, phone, mark, for_whom };
    
    // Добавление данных в массив
    receivedData.push(dataEntry);
    
    console.log('Received data:', dataEntry);
    res.send('Данные успешно получены!');
});

// Новый маршрут для получения всех данных
app.get('/data', (req, res) => {
    res.json(receivedData);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://192.168.1.115:${PORT}`);
});