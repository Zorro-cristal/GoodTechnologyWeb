<?php
    $mensaje= "Error desconocido";
    try {
        $name = htmlspecialchars($_POST['name']);
        $telefono = htmlspecialchars($_POST['phone']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        $subject = htmlspecialchars($_POST['subject']);
        $to = "zorro201021@gotmail.com";
        $body = "Nombre: $name\nCorreo electrónico: $email\nNumero: $telefono\nMensaje:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            $mensaje= "Correo enviado con éxito.";
        } else {
            $mensaje= "Error al enviar el correo.";
        }
    } catch (\Exception $e) {
        $mensaje= "Error al enviar el correo. " . $e->getMessage();
    }

    echo "<script>
            document.getElementById('aviso_titulo').innerHTML= 'Correo';
            document.getElementById('aviso_mensaje').innerHTML = '".$mensaje."';
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            const toastTrigger = document.getElementById('liveToastBtn')

            toastTrigger.addEventListener('click', () => {
                toastBootstrap.show()
            })
        </script>";
?>