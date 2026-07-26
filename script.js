const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".item").forEach((n) => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }));
}

document.querySelectorAll('.current-year').forEach((yearElement) => {
    yearElement.textContent = new Date().getFullYear();
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i1;
    let slides = document.getElementsByClassName("mySlides2");
    for (i1 = 0; i1 < slides.length; i1++) {
      slides[i1].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 5100);
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}
    slides[slideIndex3-1].style.display = "block";
    setTimeout(showSlides3, 5200);
}

function pageAbout() {
  window.location.href = "./about";
}

function pageApply() {
  window.location.href = "./apply";
}

function pageSTREAM() {
  window.location.href = "./stream";
}

function pageContact() {
  window.location.href = "./contact";
}

function pageIndex() {
  window.location.href = "https://www.upstreamprogram.org/";
}

function pageEmail() {
  window.location.href = "mailto:upstreamprogram@gmail.com";
}

function pagePhone() {
  window.location.href = "tel:+12064864950";
}

function pageLocation() {
  window.open("https://www.google.com/maps/place/Seattle,+WA");
}

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

if (isSafari()) {
  var indent1 = document.getElementById("indent1");
  
  if (indent1) {
    indent1.innerHTML = "<br>";
  }

  var indent2 = document.getElementById("indent2");

  if (indent2) {
    indent2.innerHTML = "<br>";
  }

  var indent3 = document.getElementById("indent3");

  if (indent3) {
    indent3.innerHTML = "<br>";
  }
}
