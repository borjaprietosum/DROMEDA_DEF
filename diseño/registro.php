<?php
    $link = mysql_connect("localhost", "root", "") or die ("<h2>No se encuentra el servidor</h2>");
    $db = mysql_select_db("dromedadb", $link) or die("<h2>Error de conexión</h2>");

    $nombre=$_POST['nombre_usuario'];
    $email=$_POST['email'];
    $passwd=$_POST['contrasenha'];

    $contrasenha_encrypted=md5($passwd);

    mysql_query("INSERT INTO tUser VALUES ('', '$email', '$nombre', '$contrasenha_encrypted', '', '')", $link) or die("<h2>Error de envio</h2>");

    echo '
        <h2>Registro Completo</h2>
        <h5>Gracias por resgistrarse</h5>
        <a href="login.html">Login</a>
    ';
?>