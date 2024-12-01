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

    fetch('http://192.168.1.115:3000/submit', {
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

function loadComments() {
    fetch('http://192.168.1.115:3000/data') // Предполагаем, что у вас есть этот эндпоинт
        .then(response => response.json())
        .then(comments => {
            const commentsList = document.getElementById('commentsList');
            commentsList.innerHTML = ''; // Очищаем список комментариев

            // Проверяем, есть ли комментарии
            if (comments.length === 0) {
                commentsList.innerHTML = '<p>Нет комментариев.</p>'; // Сообщение, если комментариев нет
                return;
            }

            // Перебираем и отображаем каждый комментарий
            comments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
                    <strong>${comment.fio}</strong> (${comment.phone})<br>
                    Оценка: ${comment.mark}<br>
                    Для кого: ${comment.for_whom}
                `;
                commentsList.appendChild(commentDiv);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке комментариев:', error);
        });
}

window.onload = loadComments;

// Загружаем коммен