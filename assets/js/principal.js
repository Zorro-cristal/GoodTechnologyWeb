// Se ejecuta al cargar la pagina
$(window).on('load',function() {
    // Asigna la funcion para ejecutar la funcion encargada del formulario de contactos
    $(document).ready(function() {
        var toastEl = document.getElementById('liveToast');
        var toast = new bootstrap.Toast(toastEl);
        
        $('#liveToastBtn').click(function() {
            toast.show();
        });

        $('#contact').on('submit', function(e) { 
            e.preventDefault();
            $.ajax({ 
                type: 'POST', 
                url: 'assets/php/email.php', 
                data: $(this).serialize(), 
                success: function(response) {
                    console.log(response);
                    $('#response').html(response); 
                    toast.show();
                }, 
                error: function(xhr, status, error) { 
                    console.error(xhr, status, error);
                    $('#response').html('Error al enviar el correo.', xhr.responseText); 
                    toast.show();
                } 
            }); 
        }); 
    });

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