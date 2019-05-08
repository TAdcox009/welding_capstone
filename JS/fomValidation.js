"use strict";
/*
    Gabriel Hernandez
    JS for form validaiton
*/

window.onload = function () {
    document.getElementById("submittButton").onclick = nameVal;
    document.getElementById("submittButton").onclick = mailVal;
}
// validates the name
function nameVal() {
    var name = document.getElementById("name");
    
    if (name.validity.valueMissing) {
        name.setCustomValidity("Please input your first and last name");
    } else {
        name.setCustomValidity("");
    }
}
// validate the e-mail 
function mailVal() {
    var mail = document.getElementById("mail");
    
    if (mail.validity.valueMissing) {
        mail.setCustomValidity("Please input an email");
    } else {
        mail.setCustomValidity("");
    }
}