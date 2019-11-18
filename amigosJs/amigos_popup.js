// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

/* function limpiarP() {
  var node = document.querySelector(".suggestedUser");
  node.parentNode.removeChild(node);
} */
function ignorar() {
  var alerta = confirm("¿Estás seguro de ignorar a esta persona?");
  if (alerta == true) {
    var node = document.querySelector(".uno");
    node.parentNode.removeChild(node);
  }
}
function agregar() {
  var alerta = confirm("¿Estás seguro de agregar a esta persona?");
  if (alerta == true) {
    var node = document.querySelector(".uno");
    node.parentNode.removeChild(node);
  }
}
function ignorar1() {
  var alerta = confirm("¿Estás seguro de ignorar a esta persona?");
  if (alerta == true) {
    var node = document.querySelector(".dos");
    node.parentNode.removeChild(node);
  }
}
function agregar1() {
  var alerta = confirm("¿Estás seguro de agregar a esta persona?");
  if (alerta == true) {
    var node = document.querySelector(".dos");
    node.parentNode.removeChild(node);
  }
}
