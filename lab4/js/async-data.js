async function fetchTeamData() {
    try {
        const response = await fetch('http://localhost:3000/team');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        console.log(data); // Логируем для проверки
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}

fetchTeamData();
