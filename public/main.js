var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
var arBtn = document.getElementById("lollaAr");
var brBtn = document.getElementById("lollaBr");
var clBtn = document.getElementById("lollaCl");
var locationSpan = document.getElementById("location");
var bodyBackground = document.querySelector("body");
var infoBtn = document.getElementById("infoBtn");
// SE CUENTA HACIA LA FECHA APROXIMADAD DE LA REALIZACIN DEL EVENTO
const lollaAr = new Date("Mar 17, 2023 00:00:00").getTime();
const lollaCl = new Date("Mar 17, 2023 00:00:01").getTime();
const lollaBr = new Date("Mar 24, 2023 00:00:01").getTime();

// ACTUALIZAR EL CONTADOR CADA 1 SEGUNDO

var x = setInterval(function () {
  // TOMA LA FECHA DE HOY
  var now = new Date().getTime();
  // ENCENTRA DISTANCIA ENTRE LA FECHA DEL EVENTO Y LA FECHA DE HOY
  var distance = countDownDate - now;

  // CALCULA DIAS, HORAS, MINUTOS Y SEGUNDOS

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dias.innerHTML = days;
  horas.innerHTML = hours;
  minutos.innerHTML = minutes;
  segundos.innerHTML = seconds;
  if (countDownDate === now || countDownDate < now) {
    dias = 0;
    horas = 0;
    minutos = 0;
    segundos = 0;
    showModal();
  }
}, 1000);
countDownDate = lollaAr;

// var countDownDate =
arBtn.addEventListener("click", function () {
  countDownDate = lollaAr;
  bodyBackground.style.backgroundImage = "url(/css/Background6.jpg)";
  locationSpan.innerText = "Ar";
  infoBtn.href = "https://www.lollapaloozaar.com";
});

brBtn.addEventListener("click", function () {
  countDownDate = lollaBr;
  bodyBackground.style.backgroundImage = "url(/css/background.png)";
  locationSpan.innerText = "Br";
  infoBtn.href = "https://www.lollapaloozabr.com";
});
clBtn.addEventListener("click", function () {
  countDownDate = lollaCl;
  bodyBackground.style.backgroundImage = "url(/css/Background2.jpg)";
  locationSpan.innerText = "Cl";
  infoBtn.href = "https://www.lollapaloozacl.com";
});

//                 Modal Close Button
let modal = document.querySelector(".modal");
let closeBtn = document.getElementsByClassName("close");

closeBtn.addEventListener("click", () => {
  productModal.style.display = "none";
});

//        OPEN MODAL
function showModal() {
  productModal.style.display = "block";
  productModal.classList.add("slide-in-bottom");
}
