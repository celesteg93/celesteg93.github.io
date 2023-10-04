alert("Bienvenido");
document.write("Centro de Atencion Virtual de Pacientes");
var UsuarioRegistrado="user";
var ContradeñaRegistrada="123";
var UsuarioIngresado=prompt("Ingrese el usuario");
alert("Bienvenido + usuario");
var ContrseñaIngresada=prompt("Ingrese la contraseña");
if(UsuarioRegistrado==UsuarioIngresado && ContradeñaRegistrada==ContrseñaIngresada){
    alert("Acceso correcto");
}else{
    alert("Acceso denegado");
}