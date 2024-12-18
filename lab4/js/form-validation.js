document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Проверяем, заполнены ли все поля
    if (!name || !email || !message) {
        alert("Все поля должны быть заполнены!");
        return;
    }

    // Формируем данные для отправки
    const formData = {
        name,
        email,
        message,
    };

    try {
        // Отправляем POST-запрос
        const response = await fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Форма успешно отправлена!");
            console.log("Отправленные данные:", formData);
        } else {
            throw new Error("Ошибка отправки данных на сервер.");
        }
    } catch (error) {
        console.error(error);
        alert("Произошла ошибка при отправке формы.");
    }
});
