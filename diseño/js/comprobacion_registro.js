
function validacion_formulario() {
    //Declaramos estas variables con su respectivo valor
    const nombreUsuario = $("#nombre_usuario").val();
    const email = $("#email").val();
    const contrasenha = $("#contrasenha").val();
    const rep_contrasenha = $("#rep_contrasenha").val();
    //Comprobamos que el nombre de usuario no está vacío
    if (nombreUsuario == "") {
        alert("Por favor, escribe tu nombre de usuario.");
        return false;
    }
    if (contrasenha.length != "") {
        $('#contrasenha').each(function(e) {
            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
            var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
            var enoughRegex = new RegExp("(?=.{6,}).*", "g");
            if (false == enoughRegex.test($(this).val())) {
                    $('#passstrength').html('Más caracteres');
            } else if (strongRegex.test($(this).val())) {
                    $('#passstrength').className = 'ok';
                    $('#passstrength').html('Fuerte!');
            } else if (mediumRegex.test($(this).val())) {
                    $('#passstrength').className = 'alert';
                    $('#passstrength').html('Media!');
            } else {
                    $('#passstrength').className = 'error';
                    $('#passstrength').html('Débil!');
            }
            return true;
       });
    }else{
        alert("Por favor, escribe una contraseña");
        return false;
    }
    if (rep_contrasenha != contrasenha) {
        alert("Las contraseñas no son iguales")
    }
    //Comprobamos que el email no esté vacío y que cumple con los requisitos requeridos
    if (email != "") {
        $('#email').each(function(e) { 
            email_address = $(this); 
            email_regex = /^[a-zA-Z0-9 ._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
            if(!email_regex.test(email_address.val())) { 
                alert('Este correo electrónico no es válido'); 
                e.preventDefault(); 
                return false; 
            } 
        });
    }else{
        alert("Por favor, escrib un correo electrónico");
        return false;
    }

}
$(document).ready(function () {
$("#enviar").click(function (){
    //Llamamos a la función
    validacion_formulario();
});
});
