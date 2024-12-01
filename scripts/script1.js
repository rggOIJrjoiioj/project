document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Собираем данные формы в объект
    const formData = {
        fio: this.fio.value,
        phone: this.phone.value,
        mark: this.mark.value,
        for_whom: this.for_whom.value
    };

    // Преобразуем объект в JSON
    const jsonData = JSON.stringify(formData);

    // Для отладки: выводим данные в консоль
    console.log(jsonData);

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Указываем, что отправляем JSON
        },
        body: jsonData // Отправляем JSON в теле запроса
    })
    .then(response => response.text()) // Получаем текстовый ответ от сервера
    .then(data => {
        console.log(data); // Выводим ответ в консоль
        alert('Данные успешно отправлены!'); // Можно вывести сообщение для пользователя
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных.');
    });
});