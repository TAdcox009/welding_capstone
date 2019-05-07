function validateName() {
    var fName = document.getElementById("name");
    if (fName.selectedIndex === 0) {
        fName.setCustomValidity("Select the expiration month");
    } else {
        fName.setCustomValidity("");
    }
}