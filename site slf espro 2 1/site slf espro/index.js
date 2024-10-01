function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatBody = document.getElementById('chat-body');
    chatBody.classList.toggle('visible');
    chatBody.classList.toggle('hidden');
    chatContainer.classList.toggle('expanded');
    
    if (chatBody.classList.contains('visible')) {
        const chatResponse = document.getElementById('chat-response');
        if (chatResponse.innerHTML === '') {
            chatResponse.innerHTML = 'Selecione uma opção para receber ajuda.';
        }
        document.getElementById('chat-buttons').style.display = 'flex';
    } else {
        document.getElementById('chat-response').innerHTML = '';
        document.getElementById('chat-buttons').style.display = 'flex';
    }
}

function sendMessage(issue, button) {
    const chatResponse = document.getElementById('chat-response');
    const chatButtons = document.getElementById('chat-buttons');

    // Adicionar a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-response', 'user');
    userMessage.textContent = `${issue}`;
    chatResponse.innerHTML = ''; // Limpar respostas anteriores
    chatResponse.appendChild(userMessage);

    // Limpar botões e esconder
    chatButtons.style.display = 'none';

    // Adicionar a mensagem da resposta com animação de digitação
    const responseMessage = document.createElement('div');
    responseMessage.classList.add('chat-response', 'typing');
    responseMessage.textContent = ''; // Inicia como uma mensagem de digitação
    chatResponse.appendChild(responseMessage);

    // Definir a resposta com base no botão clicado
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

    // Simular a digitação
    setTimeout(() => {
        responseMessage.classList.remove('typing');
        responseMessage.textContent = responseText; // Mensagem de resposta
    }, 1000);

    // Exibir resposta
    chatResponse.appendChild(responseMessage);
    document.getElementById('chat-buttons').style.display = 'flex'; // Mostrar botões
}
