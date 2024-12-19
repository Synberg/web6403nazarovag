document.addEventListener("DOMContentLoaded", async () => {
    const teamTable = document.getElementById("team-table");
    try {
        const response = await fetch('http://localhost:3000/team');
        if (!response.ok) throw new Error("Ошибка загрузки данных!");

        const data = await response.json();
	const team = data.data;
        teamTable.innerHTML = ''; // Очистить сообщение о загрузке

        // Создаем заголовок таблицы
        const header = document.createElement("div");
        header.classList.add("team-row");
        header.innerHTML = `
            <div class="team-cell"><strong>Имя</strong></div>
            <div class="team-cell"><strong>Должность</strong></div>
            <div class="team-cell"><strong>Опыт (лет)</strong></div>
        `;
        teamTable.appendChild(header);

        // Создаем строки таблицы
        team.forEach(member => {
            const row = document.createElement("div");
            row.classList.add("team-row");
            row.innerHTML = `
                <div class="team-cell">${member.name}</div>
                <div class="team-cell">${member.position}</div>
                <div class="team-cell">${member.experience}</div>
            `;
            teamTable.appendChild(row);
        });
    } catch (error) {
        console.error("Ошибка:", error);
        teamTable.innerHTML = '<p>Не удалось загрузить данные о команде!</p>';
    }
});
