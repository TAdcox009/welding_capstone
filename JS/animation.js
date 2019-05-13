"use strict";

// Animates the word "home" above the nav in the top right corner of the home page.
function homeAnimation () {

    // What word(s) will animate.
    var string = "Home";
    var home = string.split("");
    // Gets the element by the id of where the word will animate.
    var el = document.getElementById("home");
    (function animate() {
        home.length > 0 ? el.innerHTML += home.shift( ) : clearTimeout(running);
        // How long it takes for the words to animate.
        var running = setTimeout(animate, 90);
    })();
}

setTimeout(homeAnimation, 0.5);

// Animates the words "About the program" above the nav in the top right corner of the about page.
function aboutAnimation () {
    // What word(s) will animate.
    var string = "About the Program";
    var about = string.split("");
     // Gets the element by the id of where the word will animate.
    var el = document.getElementById("about");
    (function animate() {
        about.length > 0 ? el.innerHTML += about.shift( ) : clearTimeout(running);
        // How long it takes for the words to animate.
        var running = setTimeout(animate, 90);
    })();
}

setTimeout(aboutAnimation, 0.5);

// Animates the word "ctso" above the nav in the top right corner of the ctso page.
function ctsoAnimation () {
    // What word(s) will animate.
    var string = "CTSO";
    var ctso = string.split("");
     // Gets the element by the id of where the word will animate.
    var el = document.getElementById("ctso");
    (function animate() {
        ctso.length > 0 ? el.innerHTML += ctso.shift( ) : clearTimeout(running);
        // How long it takes for the words to animate.
        var running = setTimeout(animate, 90);
    })();
}

setTimeout(ctsoAnimation, 0.5);

// Animates the words "campus contacts" above the nav in the top right corner of the contact page.
function contactAnimation () {
    // What word(s) will animate.
    var string = "Campus Contacts";
    var contact = string.split("");
     // Gets the element by the id of where the word will animate.
    var el = document.getElementById("contact");
    (function animate() {
        contact.length > 0 ? el.innerHTML += contact.shift( ) : clearTimeout(running);
        // How long it takes for the words to animate.
        var running = setTimeout(animate, 90);
    })();
}

setTimeout(contactAnimation, 0.5);

// Animates the words "Student services" above the nav in the top right corner of the student services page.
function serviceAnimation () {
    // What word(s) will animate.
    var string = "Student Services";
    var service = string.split("");
     // Gets the element by the id of where the word will animate.
    var el = document.getElementById("service");
    (function animate() {
        service.length > 0 ? el.innerHTML += service.shift( ) : clearTimeout(running);
        // How long it takes for the words to animate.
        var running = setTimeout(animate, 90);
    })();
}

setTimeout(serviceAnimation, 0.5);