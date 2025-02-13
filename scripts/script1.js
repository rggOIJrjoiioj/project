document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const formData = {
        fio: this.fio.value,
        phone: this.phone.value,
        mark: this.mark.value,
        for_whom: this.for_whom.value
    };

    
    const jsonData = JSON.stringify(formData);

    console.log(jsonData);

    fetch('http://192.168.1.115:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: jsonData 
    })
    .then(response => response.text()) 
    .then(data => {
        console.log(data); 
        alert('Данные успешно отправлены!'); 
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных.');
    });
});

function loadComments() {
    fetch('http://192.168.1.115:3000/data') // 
        .then(response => response.json())
        .then(comments => {
            const commentsList = document.getElementById('commentsList');
            commentsList.innerHTML = ''; 

            
            if (comments.length === 0) {
                commentsList.innerHTML = '<p>Нет комментариев.</p>'; 
            }
           
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