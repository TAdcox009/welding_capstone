"use strict";

// JavaScript for the slideshow on the home page.

var slideIndex = 0;
showSlides();

// Changes which image shows.
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    // Changes the image every 3 seconds.
    setTimeout(showSlides, 3000); 
}