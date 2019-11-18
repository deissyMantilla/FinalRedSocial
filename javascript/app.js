
/* Informacion de LocalStorage del Usuario
localStorage.setItem("nombre", "Paula");
localStorage.setItem("apellido", "Perez"); */

function cambioUsuario() {
    let nombreL = localStorage.getItem("nombre");
    let apellido = localStorage.getItem("apellido");
    document.getElementById("usuario").innerHTML = nombreL + " " + apellido;
    console.log(nombreL + apellido);
};

function cerrarSesion() {
    document.querySelector(".dropdown").classList.toggle("show")

}
const fotoUsurio = document.querySelector('.imagenPerfil');
fotoUsurio.setAttribute.src = '../img/joe-gardner-fn_BT9fwg_E-unsplash.jpg'

cambioUsuario();


