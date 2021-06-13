$(document).ready(function () {
    var calendar = document.getElementById("calendar");
    var calendarObj = new FullCalendar.Calendar(calendar,
        {
            initialView: 'dayGridMonth',
            initialDate: '2021-06-12',
            headerToolbar:{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'Image 1 was added',
                    start: '2021-06-15',
                    end: '2021-06-015'
                },
                {
                    title: 'Image 2 was added',
                    start: '2021-06-20'
                },
                {
                    title: 'Image 3 was added',
                    start: '2021-06-26'
                },
                {
                    title: 'Image 4 was added',
                    start: '2021-06-28'
                },
                {
                    title: 'Image 5 was added',
                    start: '2021-06-30'
                }
                ]
        });
    calendarObj.render();
});