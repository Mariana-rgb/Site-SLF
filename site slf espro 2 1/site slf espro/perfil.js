// Supondo que as informações do usuário foram armazenadas em variáveis
const userData = {
    cpf: sessionStorage.getItem('cpf') || "123.456.789-00", // Exemplo de CPF
    cep: sessionStorage.getItem('cep') || "12345-678",       // Exemplo de CEP
    cartaoSUS: sessionStorage.getItem('sus') || "9876543210", // Exemplo de Cartão do SUS
    email: sessionStorage.getItem('email') || "karioca@exemplo.com", // Exemplo de E-mail
    numero: sessionStorage.getItem('numero') || "(11) 91234-5678" // Exemplo de Telefone
};

// Preencher os campos do formulário com os dados do usuário
document.getElementById('cpf').value = userData.cpf;
document.getElementById('cep').value = userData.cep;
document.getElementById('cartao_sus').value = userData.cartaoSUS;
document.getElementById('email').value = userData.email;
document.getElementById('numero').value = userData.numero;

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
    chatResponse.innerHTML = ''; // Limpar respostas anteriores
    chatResponse.appendChild(userMessage);

    // Limpar botões e esconder
    document.getElementById('chat-buttons').style.display = 'none';

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
        chatResponse.appendChild(responseMessage);
        document.getElementById('chat-buttons').style.display = 'flex'; // Mostrar botões
    }, 1000);
}
