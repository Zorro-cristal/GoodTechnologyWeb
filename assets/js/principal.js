// Se ejecuta al cargar la pagina
$(window).on('load',function() {
    /* // Obtiene e implamenta la inforamcion en el json.
    fetch('../../info.json').then(
        response => response.json()).then(
            data => {
                document.getElementById('cant_empresas').innerHTML= data.cant_empresas + "+";
                document.getElementById('cant_clientes').innerHTML= data.cant_clientes + "+";
                document.getElementById('cant_proyectos').innerHTML= data.cant_proyectos + "+";
            }
        ).catch(error => console.error("Error al recuperar informacion del JSON: ", error)); */
});

function enviarCorreo(formulario_event) {
    formulario_event.preventDefault();
    const name= document.getElementById("name").value;
    const phone= document.getElementById("phone").value;
    const email= document.getElementById("email").value;
    let subject= document.getElementById("subject").value;
    subject= subject.replace(" ", "%20");
    let message= document.getElementById("message").value;
    message= message.replace('/\n/g', '%0D%0A');
    message= message.replace(" ", "%20");

    informacion_extra= `Nombre: ${name}, Telefono: ${phone}, Correo: ${email}`;
    console.log(informacion_extra);
    window.location.href = `mailto:administracion@goodtechnology.com.py?subject=${subject}&body=${message}%0D%0A${informacion_extra}`;
    //console.log(`mailto:administracion@goodtechnology.com.py?subject=${subject}&body=${message}%0D%0A${informacion_extra}`);
}