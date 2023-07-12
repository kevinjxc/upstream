//Hamburger Variables Created
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

//Event Listener for Hamburger Created
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

//Lists Items in Hamburger
document.querySelectorAll(".item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))

//Creates Variables to Count Slide Index
let slideIndex = 0;
showSlides();

//Shows Slides on an Automated Timer
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4500);
}

//Creates Variables to Count Slide Index
let slideIndex2 = 0;
showSlides2();

//Shows Slides on an Automated Timer
function showSlides2() {
    let i1;
    let slides = document.getElementsByClassName("mySlides2");
    for (i1 = 0; i1 < slides.length; i1++) {
      slides[i1].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 4500);
}