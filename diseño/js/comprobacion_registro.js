
function validacion_formulario() {
    //Declaramos estas variables con su respectivo valor
    let isOkeynombre = true;
    let isOkeyContrasenha = true;
    let isOkeyRepContrasenha = true;
    let isOkeyEmail = true;
    const nombreUsuario = $("#nombre_usuario").val();
    const email = $("#email").val();
    const contrasenha = $("#contrasenha").val();
    const rep_contrasenha = $("#rep_contrasenha").val();
    //Comprobamos que el nombre de usuario no está vacío
    if (nombreUsuario == "") {
        $('#nombre_usuario').removeClass('ok');
        $('#nombre_usuario').addClass('error');
        isOkeynombre=false;
    }else{
        $('#nombre_usuario').removeClass('error');
        $('#nombre_usuario').addClass('ok');
        isOkeynombre=true;
    }
    if (contrasenha.length != "") {
        $('#contrasenha').removeClass('error');
        $('#contrasenha').addClass('ok');
        isOkeyContrasenha = true;
    } else {
        $('#contrasenha').addClass('error');
        $('#contrasenha').removeClass('ok');
        isOkeyContrasenha = false;
        
    }
    if (rep_contrasenha != contrasenha) {
        $('#rep_contrasenha').addClass('error');
        $('#rep_contrasenha').removeClass('ok');
        isOkeyRepContrasenha=false;
    }else{
        $('#rep_contrasenha').addClass('ok');
        $('#rep_contrasenha').removeClass('error');
        isOkeyRepContrasenha=true;
    }
    //Comprobamos que el email no esté vacío y que cumple con los requisitos requeridos
    if (email != "") {
        $('#email').each(function (e) {
            email_address = $(this);
            email_regex = /^[a-zA-Z0-9 ._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            if (!email_regex.test(email_address.val())) {
                $('#email').addClass('error');
                $('#email').removeClass('ok');
                isOkeyEmail=false;
                e.preventDefault();
            }else{
                $('#email').addClass('ok');
                $('#email').removeClass('error');
                isOkeyEmail=true;
            }
        });
    } else {
        $('#email').addClass('error');
        $('#email').removeClass('ok');
        isOkeyEmail=false;
    }
    $("#nombre_usuario").focusout(function () {
        $('#nombre_usuario').removeClass('error');
        $('#nombre_usuario').removeClass('ok');
        if ($("#nombre_usuario").val().length < 1) {
            $('#nombre_usuario').addClass('error');
        } else {
            $('#nombre_usuario').addClass('ok');
            $('#nombre_usuario').removeClass('error');
        }
    })
    $("#email").focusout(function () {
        const email = $("#email").val();
        $('#email').removeClass('error');
        $('#email').removeClass('ok');
        if (email != "") {
            $('#email').each(function (e) {
                $('#email').removeClass('ok');
                email_address = $(this);
                email_regex = /^[a-zA-Z0-9 ._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                if (!email_regex.test(email_address.val())) {
                    $('#email').addClass('error');
                    $('#email').removeClass('ok');
                    e.preventDefault();
                } else {
                    $('#email').addClass('ok');
                }
            });
        } else {
            $('#email').addClass('error');
        }
    })
    $("#contrasenha").focusout(function () {
        $('#contrasenha').removeClass('error');
        $('#contrasenha').removeClass('ok');
        console.log("Focusout")
        if ($("#contrasenha").val().length < 1) {
            $('#contrasenha').addClass('error');
        } else {
            $('#nombre').addClass('ok');
            $('#nombre').removeClass('error');
        }
    })
    $("#rep_contrasenha").focusout(function () {
        $('#rep_contrasenha').removeClass('error');
        $('#rep_contrasenha').removeClass('ok');
        console.log("Focusout")
        if ($("#rep_contrasenha").val()!=$("#contrasenha").val()) {
            $('#rep_contrasenha').addClass('error');
        } else {
            $('#rep_contrasenha').addClass('ok');
            $('#rep_contrasenha').removeClass('error');
        }
    })
    if(isOkeyContrasenha==true && isOkeyEmail==true && isOkeyRepContrasenha==true && isOkeynombre==true){
        console.log("datos enviados")
        return true;
    }else{
        return false;
    }
}
$(document).ready(function () {
    $("#enviar").click(function () {
        //Llamamos a la función
        validacion_formulario();
    });
});
