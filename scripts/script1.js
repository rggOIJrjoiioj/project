const form = document.querySelector(".form");
    const text = document.querySelector(".dysha");
    const feedbacksDiv = document.getElementById("feedbacks");

    // Функция для получения отзывов
    async function loadFeedbacks() {
        const response = await fetch('http://localhost:3000/feedbacks');
        const feedbacks = await response.json();
        feedbacksDiv.innerHTML = feedbacks.map(fb => 
            <p><strong>${fb.fio}</strong>: ${fb.mark} (${fb.for_whom})</p>
        ).join('');
    }

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        // Проверяем, валидна ли форма
        if (form.checkValidity()) {
            const feedbackData = {
                fio: form.fio.value,
                phone: form.phone.value,
                mark: form.mark.value,
                for_whom: form.for_whom.value,
            };

            // Отправляем данные на сервер
            await fetch('http://localhost:3000/feedbacks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            // Отображаем текст
            text.style.display = "block";

            // Загружаем отзывы заново
            loadFeedbacks();
            
            // Сбрасываем форму
            form.reset();
        }
    });

    // Загружаем отзывы при загрузке страницы
    loadFeedbacks();