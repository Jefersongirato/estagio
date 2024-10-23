function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        document.getElementById('error-message').innerText = 'Por favor, preencha todos os campos.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = 'As senhas não coincidem.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Simula o registro do usuário (lógica real de registro seria feita no servidor)
    alert('Registro bem-sucedido!');

    // Redireciona para a página de login após o registro bem-sucedido
    window.location.href = 'login.html';
}
