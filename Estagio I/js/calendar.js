document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Prova de Matemática', start: '2024-03-10' },
            { title: 'Entrega de Trabalho de Geografia', start: '2024-03-15' }
        ]
    });

    calendar.render();
});
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Prova de Matemática', start: '2024-03-10' },
            { title: 'Entrega de Trabalho de Geografia', start: '2024-03-15' }
        ]
    });

    calendar.render();
});
