var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
// SE CUENTA HACIA LA FECHA APROXIMADAD DE LA REALIZACIN DEL EVENTO
var countDownDate = new Date("Mar 18, 2022 00:00:00").getTime();

// ACTUALIZAR EL CONTADOR CADA 1 SEGUNDO

var x = setInterval(function() {
    // TOMA LA FECHA DE HOY
    var now = new Date().getTime();
    // ENCENTRA DISTANCIA ENTRE LA FECHA DEL EVENTO Y LA FECHA DE HOY 
    var distance = countDownDate - now;

    // CALCULA DIAS, HORAS, MINUTOS Y SEGUNDOS

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60))/ 1000);

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = minutes;
    segundos.innerHTML = seconds;
    

})