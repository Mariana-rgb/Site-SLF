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

    // Adicionar a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-response', 'user');
    userMessage.textContent = `${issue}`;
    chatResponse.innerHTML = ''; // Limpa respostas anteriores
    chatResponse.appendChild(userMessage);

    // Limpa botões e esconder
    chatButtons.style.display = 'none';

    // Adiciona a mensagem da resposta com animação de digitação
    const responseMessage = document.createElement('div');
    responseMessage.classList.add('chat-response', 'typing');
    responseMessage.textContent = ''; // Inicia como uma mensagem de digitação
    chatResponse.appendChild(responseMessage);

    // Defini a resposta com base no botão clicado
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

    // Simula a digitação
    setTimeout(() => {
        responseMessage.classList.remove('typing');
        responseMessage.textContent = responseText; // Mensagem de resposta
    }, 1000);

    // Exibi a resposta
    chatResponse.appendChild(responseMessage);
    document.getElementById('chat-buttons').style.display = 'flex'; // Mostra os botões
}

document.getElementById('agendamento-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Verifica se todos os campos estão preenchidos
    if (this.checkValidity()) {
        // Redireciona para a página de agendamento se todos os campos forem válidos
        window.location.href = 'tela-agendamento.html';
    } else {
        // Se não estiver válido, mostra mensagem ou trata o erro como desejar
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
