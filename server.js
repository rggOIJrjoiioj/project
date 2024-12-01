const http = require('http');
const url = require('url');
const { parse } = require('querystring');

const hostname = '127.0.0.1'; // или 'localhost'
const port = 3000;

// Массив для хранения отзывов
let feedbacks = [];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Обработка GET-запроса на /feedbacks
    if (req.method === 'GET' && parsedUrl.pathname === '/feedbacks') {
        res.statusCode = 200; // Код состояния 200 (ОК)
        res.setHeader('Content-Type', 'application/json'); // Тип контента
        res.end(JSON.stringify(feedbacks)); // Отправляем массив отзывов в формате JSON
    }
    // Обработка POST-запроса на /feedbacks
    else if (req.method === 'POST' && parsedUrl.pathname === '/feedbacks') {
        let body = '';

        // Получаем данные из запроса
        req.on('data', chunk => {
            body += chunk.toString(); // Преобразуем Buffer в строку
        });

        req.on('end', () => {
            const feedback = parse(body); // Парсим данные из строки запроса
            feedbacks.push(feedback); // Добавляем новый отзыв в массив
            res.statusCode = 201; // Код состояния 201 (Создано)
            res.setHeader('Content-Type', 'application/json'); // Тип контента
            res.end(JSON.stringify({ message: 'Отзыв добавлен', feedback })); // Ответ с сообщением
        });
    } else {
        res.statusCode = 404; // Код состояния 404 (Не найдено)
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found\n'); // Ответ для несуществующих маршрутов
    }
});

server.listen(port, hostname, () => {
    console.log('Сервер запущен по адресу http://${hostname}:${port}/');
});
