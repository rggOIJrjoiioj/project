const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

let feedbacks = []; // Массив для хранения отзывов

app.use(cors());
app.use(bodyParser.json());

// Эндпоинт для получения всех отзывов
app.get('/feedbacks', (req, res) => {
    res.json(feedbacks);
});

// Эндпоинт для отправки отзыва
app.post('/feedbacks', (req, res) => {
    const feedback = req.body;
    feedbacks.push(feedback);
    res.status(201).send();
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});
g