function recoverPassword() {
    var email = document.getElementById('email').value;

    if (email.trim() === "") {
        document.getElementById('error-message').innerText = 'Por favor, preencha todos os campos.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Simula a recuperação de senha
    alert('Instruções para recuperação de senha foram enviadas para ' + email);
    window.location.href = 'login.html';
}
