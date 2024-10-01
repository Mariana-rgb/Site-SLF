document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os dados do formulário
    const cpf = document.getElementById('cpf').value;
    const sus = document.getElementById('sus').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;
    const numero = document.getElementById('numero').value;

    // Armazena em sessionStorage
    sessionStorage.setItem('cpf', cpf);
    sessionStorage.setItem('sus', sus);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('cep', cep);
    sessionStorage.setItem('numero', numero);

    // Redireciona para agendamento.html
    window.location.href = "agendamento.html";
});

function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    chatBody.classList.toggle('hidden');
    chatBody.classList.toggle('visible');
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('expanded');
}

function sendMessage(issue, button) {
    const chatResponse = document.getElementById('chat-response');
    const chatButtons = document.getElementById('chat-buttons');

    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-response', 'user');
    userMessage.textContent = `${issue}`;
    chatResponse.innerHTML = '';
    chatResponse.appendChild(userMessage);

    chatButtons.style.display = 'none';

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
