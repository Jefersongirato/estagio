function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica se o login é de administrador ou aluno
    if (username === 'admin' && password === 'adminpass') {
        localStorage.setItem('adminToken', 'adminLogged'); // Armazena token de administrador
        window.location.href = 'admin.html'; // Redireciona para a página de administrador
    } else if (username === 'usuario' && password === 'senha') {
        localStorage.setItem('sessionToken', 'userLogged'); // Armazena token de aluno
        window.location.href = 'home.html'; // Redireciona para a página de aluno
    } else {
        document.getElementById('error-message').innerText = 'Usuário ou senha incorretos.';
        document.getElementById('error-message').style.display = 'block';
    }
}

function logout() {
    // Remove todos os tokens de sessão
    localStorage.removeItem('adminToken');
    localStorage.removeItem('sessionToken');
    window.location.href = 'login.html';
}
