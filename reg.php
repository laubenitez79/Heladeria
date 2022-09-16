<?php
//Conexión a la base de datos

$conexion = mysqli_connect('localhost', 'root', '','heladeriasky') or die (mysqli_error($mysqli));

insertar($conexion);

//Inserto un cliente

function insertar ($conexion){
    $nombre_completo = $_POST['nombre_completo'];
    $contacto = $_POST['contacto'];
    $precio_ubicacion = $_POST['precio_ubicacion'];
    $numero = $_POST['numero'];
    $correo = $_POST['correo'];

    $consulta = "INSERT INTO clientes(nombre_completo , contacto , precio_ubicacion , numero , correo)
    VALUES ('$nombre_completo', '$contacto' , '$precio_ubicacion', '$numero', '$correo')";

    mysqli_query($conexion, $consulta);
    mysqli_close($conexion);

}


//Obtiene la longitud del string

//$req = (strlen($nombre)*strlen($contacto)*strlen($evento)*strlen($precio)*strlen($ubicacion)*strlen($numero)*strlen($correo));


//Ingresar la informacion a la bd

//mysql_query("INSERT INTO clientes VALUES ('' , '$nombre','$contacto','$evento','$precio','$ubicacion','$numero','$correo')");


?>