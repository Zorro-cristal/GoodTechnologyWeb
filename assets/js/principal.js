// Se ejecuta al cargar la pagina
$(window).on('load',function() {
    // Obtiene e implamenta la inforamcion en el json.
    fetch('../../info.json').then(
        response => response.json()).then(
            data => {
                document.getElementById('cant_empresas').innerHTML= data.cant_empresas + "+";
                document.getElementById('cant_clientes').innerHTML= data.cant_clientes + "+";
                document.getElementById('cant_proyectos').innerHTML= data.cant_proyectos + "+";
            }
        ).catch(error => console.error("Error al recuperar informacion del JSON: ", error));
});