document.addEventListener('DOMContentLoaded', function() {
    // Referências às seções
    const sections = {
        'student-management': document.getElementById('student-management'),
        'subject-management': document.getElementById('subject-management'),
        'reports-management': document.getElementById('reports-management')
    };

    // Função para mostrar a seção correspondente
    function showSection(sectionId) {
        // Oculta todas as seções
        Object.values(sections).forEach(section => section.style.display = 'none');
        // Mostra apenas a seção clicada
        sections[sectionId].style.display = 'block';
    }

    // Lista de alunos (simulada)
    const students = [
        'SD BM Joao Silva',
        'SD BM Maria Silva'
    ];

    const studentsList = document.getElementById('students-list');
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        studentsList.appendChild(li);
    });

    // Função para adicionar novo aluno
    window.addStudent = function() {
        const newStudent = prompt('Digite o nome do novo aluno:');
        if (newStudent) {
            const li = document.createElement('li');
            li.textContent = newStudent;
            studentsList.appendChild(li);
        }
    };

    // Lista de matérias (simulada)
    const subjects = [
        'Espaço Confinado',
        'Combate a Incêndio',
        'Salvamento em Altura',
        'Salvamento Terrestre',
        'Atendimento Pré-Hospitalar'
    ];

    const subjectsList = document.getElementById('subjects-list');
    subjects.forEach(subject => {
        const li = document.createElement('li');
        li.textContent = subject;
        subjectsList.appendChild(li);
    });

    // Função para adicionar nova matéria
    window.addSubject = function() {
        const newSubject = prompt('Digite o nome da nova matéria:');
        if (newSubject) {
            const li = document.createElement('li');
            li.textContent = newSubject;
            subjectsList.appendChild(li);
        }
    };

    // Relatórios (simulados)
    const reports = [
        'Relatório de Desempenho Geral - 2024/2',
        'Relatório de Desempenho por Matéria'
    ];

    const reportsList = document.getElementById('reports-list');
    reports.forEach(report => {
        const li = document.createElement('li');
        li.textContent = report;
        reportsList.appendChild(li);
    });

    // Função para gerar novo relatório
    window.generateReport = function() {
        alert('Relatório gerado com sucesso!');
    };
});
