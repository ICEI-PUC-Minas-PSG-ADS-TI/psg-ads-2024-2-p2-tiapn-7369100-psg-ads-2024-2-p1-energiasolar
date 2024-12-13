// Selecionar elementos importantes
const assuntoForm = document.getElementById('assuntoForm');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackMessage = document.getElementById('feedbackMessage');

// Quando o formulário de assunto for enviado
assuntoForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  const assunto = document.getElementById('assunto').value;

  if (assunto) {
    // Esconde o formulário de assunto e exibe o formulário de feedback
    assuntoForm.style.display = 'none';
    feedbackForm.style.display = 'block';

    // Exibe uma mensagem informativa sobre o assunto escolhido
    feedbackMessage.textContent = `Você selecionou o assunto: ${assunto}`;
    feedbackMessage.style.color = 'black';
  } else {
    feedbackMessage.textContent = 'Por favor, selecione um assunto.';
    feedbackMessage.style.color = 'red';
  }
});

// Quando o formulário de feedback for enviado
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  const nota = document.getElementById('nota').value; // Verificar o valor no campo oculto
  const justificativa = document.getElementById('justificativa').value;

  if (nota && justificativa) {
    // Mostra a mensagem de sucesso
    feedbackMessage.textContent = 'Feedback enviado com sucesso!';
    feedbackMessage.style.color = 'green';

    // Limpa os campos do formulário
    feedbackForm.reset();

    // Opcional: esconde o formulário de feedback
    feedbackForm.style.display = 'none';
  } else {
    feedbackMessage.textContent = 'Por favor, preencha todos os campos.';
    feedbackMessage.style.color = 'red';
  }
});

// Manipulação dos botões para escolher a nota
document.querySelectorAll('#rating button').forEach(button => {
  button.addEventListener('click', function () {
    // Remove a classe "selected" de todos os botões
    document.querySelectorAll('#rating button').forEach(btn => btn.classList.remove('selected'));

    // Adiciona a classe "selected" ao botão clicado
    this.classList.add('selected');

    // Define o valor do botão clicado no campo oculto
    document.getElementById('nota').value = this.getAttribute('data-value');
  });
});
