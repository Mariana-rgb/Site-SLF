let currentDate = new Date();

function renderCalendar() {
    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('monthYear');

    calendarBody.innerHTML = '';
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    monthYear.textContent = `${currentDate.toLocaleString('pt-BR', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = firstDay.getDay();

    for (let i = 0; i < startDay; i++) {
        const emptyDiv = document.createElement('div');
        calendarBody.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.textContent = day;
        dayDiv.onclick = () => selectDay(dayDiv);
        calendarBody.appendChild(dayDiv);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}

function selectDay(dayElement) {
    const days = document.querySelectorAll('.calendar-body .day');
    days.forEach(day => {
        day.classList.remove('selected');
    });
    dayElement.classList.add('selected');
}

function toggleMenu() {
    const menuDropdown = document.getElementById('menu-dropdown');
    menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
}

function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    chatBody.classList.toggle('hidden');
    chatBody.classList.toggle('visible');
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('expanded');
}

function sendMessage(issue, button) {
    const chatResponse = document.getElementById('chat-response');
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-response', 'user');
    userMessage.textContent = `${issue}`;
    chatResponse.innerHTML = '';
    chatResponse.appendChild(userMessage);

    document.getElementById('chat-buttons').style.display = 'none';

    const responseMessage = document.createElement('div');
    responseMessage.classList.add('chat-response', 'typing');
    responseMessage.textContent = '';

    chatResponse.appendChild(responseMessage);

    let responseText = '';
    switch (issue) {
        case 'Problemas de cadastro':
            responseText = 'Para problemas de cadastro, por favor, verifique se você está utilizando o e-mail correto e se o formulário está preenchido corretamente. Se o problema persistir, entre em contato com o suporte técnico.';
            break;
        case 'Problemas com senha':
            responseText = 'Se você está tendo problemas com a senha, utilize a opção "Esqueci minha senha" na página de login para redefini-la. Se precisar de mais ajuda, entre em contato com o suporte.';
            break;
        case 'Problemas de agendamento':
            responseText = 'Para problemas com agendamento, verifique se você está selecionando a data e hora corretas. Caso o problema continue, entre em contato com o suporte para assistência.';
            break;
        default:
            responseText = 'Selecione uma opção para receber ajuda.';
            break;
    }

    setTimeout(() => {
        responseMessage.classList.remove('typing');
        responseMessage.textContent = responseText;
    }, 1000);

    chatResponse.appendChild(responseMessage);
    document.getElementById('chat-buttons').style.display = 'flex';
}

renderCalendar();
