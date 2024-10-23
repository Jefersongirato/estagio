document.addEventListener('DOMContentLoaded', function() {
    var subjects = [
        'Espaço Confinado',
        'Combate a Incêndio',
        'Salvamento em Altura',
        'Salvamento Terrestre',
        'Atendimento Pré-Hospitalar'
    ];

    var grades = {
        'Espaço Confinado': 8.5,
        'Combate a Incêndio': 7.0,
        'Salvamento em Altura': 9.0,
        'Salvamento Terrestre': 8.0,
        'Atendimento Pré-Hospitalar': 7.5
    };

    var subjectsList = document.getElementById('subjects');
    var gradesTable = document.getElementById('historico');
    var notificationsList = document.getElementById('notifications');
    var feedbackList = document.getElementById('feedback');

    // Preenche a lista de matérias
    subjects.forEach(function(subject) {
        var li = document.createElement('li');
        li.textContent = subject;
        subjectsList.appendChild(li);
    });

    // Preenche o histórico acadêmico
    var historicoAcademico = [
        { disciplina: 'Espaço Confinado', nota: 8.5, semestre: '2024/2' },
        { disciplina: 'Combate a Incêndio', nota: 7.0, semestre: '2024/2' },
        { disciplina: 'Salvamento em Altura', nota: 9.0, semestre: '2024/2' },
        { disciplina: 'Salvamento Terrestre', nota: 8.0, semestre: '2024/2' },
        { disciplina: 'Atendimento Pré-Hospitalar', nota: 7.5, semestre: '2024/2' }
    ];

    historicoAcademico.forEach(function(item) {
        var tr = document.createElement('tr');
        var tdMateria = document.createElement('td');
        var tdNota = document.createElement('td');
        var tdSemestre = document.createElement('td');
        tdMateria.textContent = item.disciplina;
        tdNota.textContent = item.nota;
        tdSemestre.textContent = item.semestre;
        tr.appendChild(tdMateria);
        tr.appendChild(tdNota);
        tr.appendChild(tdSemestre);
        gradesTable.appendChild(tr);
    });

    // Função para gerar feedbacks fictícios
    var feedbacks = [
        { disciplina: 'Espaço Confinado', feedback: 'Ótimo desempenho, continue assim!' },
        { disciplina: 'Combate a Incêndio', feedback: 'Precisa melhorar na estratégia de combate.' }
    ];

    feedbacks.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.disciplina + ': ' + item.feedback;
        feedbackList.appendChild(li);
    });

    displayNotification('Bem-vindo ao sistema de notas!');
});

// Função para exportar notas em PDF
function exportarNotasPDF() {
    var doc = new jsPDF();
    doc.text("Relatório de Notas", 10, 10);

    var historicoAcademico = [
        { disciplina: 'Espaço Confinado', nota: 8.5, semestre: '2024/2' },
        { disciplina: 'Combate a Incêndio', nota: 7.0, semestre: '2024/2' },
        { disciplina: 'Salvamento em Altura', nota: 9.0, semestre: '2024/2' },
        { disciplina: 'Salvamento Terrestre', nota: 8.0, semestre: '2024/2' },
        { disciplina: 'Atendimento Pré-Hospitalar', nota: 7.5, semestre: '2024/2' }
    ];

    var y = 20;
    historicoAcademico.forEach(function(item) {
        doc.text(`${item.disciplina} - Nota: ${item.nota} - Semestre: ${item.semestre}`, 10, y);
        y += 10;
    });

    doc.save("relatorio_notas.pdf");
}

// Função para comparar desempenho com a média da turma
function compararDesempenho() {
    var mediaTurma = {
        'Espaço Confinado': 7.5,
        'Combate a Incêndio': 6.5,
        'Salvamento em Altura': 8.0,
        'Salvamento Terrestre': 7.0,
        'Atendimento Pré-Hospitalar': 7.2
    };

    var notasAluno = {
        'Espaço Confinado': 8.5,
        'Combate a Incêndio': 7.0,
        'Salvamento em Altura': 9.0,
        'Salvamento Terrestre': 8.0,
        'Atendimento Pré-Hospitalar': 7.5
    };

    var resultado = "Comparação com a média da turma:\n";
    for (var materia in mediaTurma) {
        var media = mediaTurma[materia];
        var notaAluno = notasAluno[materia];
        resultado += `${materia}: Sua nota: ${notaAluno}, Média da turma: ${media}\n`;
    }

    document.getElementById('resultado-comparacao').innerText = resultado;
}
