$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$(function () {
    $('[data-toogle="tooltip"]').tooltip()
})

$(document).ready(function() {
    $('#myTable').DataTable({
        "language": {
            "url":   
"//cdn.datatables.net/plug-ins/1.13.4/i18n/indonesia.json"
        }
    });
});