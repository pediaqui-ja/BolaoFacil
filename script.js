const participants = [];
const messages = [
    "Participar é muito divertido! 🎊",
    "Palpites trazem emoção ao jogo! ⚽",
    "Boa sorte a todos os participantes! 🍀",
    "Cada palpite é uma chance de ganhar! 🏅"
];

document.getElementById('submitBet').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const finalScore = document.getElementById('finalScore').value;
    const winner = document.getElementById('winner').value;
    const firstGoal = document.getElementById('firstGoal').value;
    const yellowCards = document.getElementById('yellowCards').value;
    const redCards = document.getElementById('redCards').value;
    const teamA = document.getElementById('teamA').value;
    const teamB = document.getElementById('teamB').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Adiciona o participante à lista
    participants.push(name);
    updateParticipantsList();

    // Verifica se o método de pagamento é Pix
    if (paymentMethod === 'Pix') {
        // Exibe o QR code e o botão de finalizar compra
        document.getElementById('qrCodeContainer').style.display = 'block';
        document.getElementById('submitPurchase').style.display = 'block';
        document.getElementById('submitBet').style.display = 'none'; // Oculta o botão de "Finalizar Palpite"
    } else {
        // Oculta o QR code e o botão de finalizar compra, se não for Pix
        document.getElementById('qrCodeContainer').style.display = 'none';
        document.getElementById('submitPurchase').style.display = 'none';
        document.getElementById('submitBet').style.display = 'block';
    }

    // Exibe mensagem positiva aleatória
    displayRandomMessage();

    // Limpa o formulário após o envio do palpite, se não for Pix
    if (paymentMethod !== 'Pix') {
        document.getElementById('betForm').reset();
    }
});

document.getElementById('submitPurchase').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const teamA = document.getElementById('teamA').value;
    const teamB = document.getElementById('teamB').value;
    const finalScore = document.getElementById('finalScore').value;
    const winner = document.getElementById('winner').value;
    const firstGoal = document.getElementById('firstGoal').value;
    const yellowCards = document.getElementById('yellowCards').value;
    const redCards = document.getElementById('redCards').value;

    // Formata a mensagem para envio via WhatsApp
    const message = `*Novo Palpite*\n` +
        `Nome: ${name}\n` +
        `E-mail: ${email}\n` +
        `Telefone: ${phone}\n` +
        `Time A: ${teamA}\n` +
        `Time B: ${teamB}\n` +
        `Palpite (Placar): ${finalScore}\n` +
        `Quem vai ganhar: ${winner}\n` +
        `Primeiro Gol: ${firstGoal}\n` +
        `Cartões Amarelos: ${yellowCards}\n` +
        `Cartões Vermelhos: ${redCards}`;

    // Envia a mensagem pelo WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5527997294468&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

function updateParticipantsList() {
    const participantsList = document.getElementById('participantsList');
    participantsList.innerHTML = participants.map(participant => `<li>${participant}</li>`).join('');
}

function displayRandomMessage() {
    const messageContainer = document.getElementById('messageContainer');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageContainer.innerText = randomMessage;
}