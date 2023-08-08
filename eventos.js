document.addEventListener('DOMContentLoaded', function() {
    var divSaludador = document.getElementById('divVerde');
    var boton = document.getElementById('boton')

    divSaludador.addEventListener('click', function() {
        alert('¡Hola!, soy el div.');
    });
    boton.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
