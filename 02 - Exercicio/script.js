function tomarAgua() {
    alert('Hora de toma Agua');

}
window.onload = function() {
    setInterval(tomarAgua, 60000);
}