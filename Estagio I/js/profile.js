document.addEventListener('DOMContentLoaded', function() {
    // Simula a recuperação dos dados do perfil do usuário
    var user = {
        name: 'Aluno Exemplo',
        email: 'aluno@example.com'
    };

    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
});

function updateProfile() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name.trim() === "" || email.trim() === "") {
        document.getElementById('error-message').innerText = 'Por favor, preencha todos os campos.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Simula a atualização do perfil do usuário
    alert('Perfil atualizado com sucesso!');
}
