function myFunction() {
    var x = document.getElementById("navigation");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




function validateForm() {
    // Preia valorile din formular
    
    const nume = document.getElementById('nume').value;
    const prenume = document.getElementById('prenume').value;
    const telefon = document.getElementById('telefon').value;
    const dataNasterii = document.getElementById('data_nasterii').value;
    const email = document.getElementById('email').value;
    const motiv = document.getElementById('motiv').value;

    // Verifică dacă toate câmpurile sunt completate
    if (!nume || !prenume || !telefon || !dataNasterii || !email || !motiv) {
        alert("Te rugăm să completezi toate câmpurile!");
        return false;
    }

    // Verifică dacă numărul de telefon este valid
    const telefonRegex = /^\d{10}$/;
    if (!telefonRegex.test(telefon)) {
        alert("Numărul de telefon trebuie să conțină exact 10 cifre.");
        return false;
    }

    // Verifică dacă email-ul este valid
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Te rugăm să introduci un email valid.");
        return false;
    }

    alert("Formularul a fost trimis cu succes! Mulțumim pentru ajutor!");
    return true;

    function validateForm() {
    // Preia valorile din formular
    const nume = document.getElementById('nume').value;
    const prenume = document.getElementById('prenume').value;
    const telefon = document.getElementById('telefon').value;
    const dataNasterii = document.getElementById('data_nasterii').value;
    const email = document.getElementById('email').value;
    const motiv = document.getElementById('motiv').value;

    let valid = true;
    // Curăță mesajele anterioare de eroare
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(msg => msg.remove());

    // Verifică dacă toate câmpurile sunt completate
    if (!nume || !prenume || !telefon || !dataNasterii || !email || !motiv) {
        valid = false;
        if (!nume) addError('nume', "Te rugăm să completezi numele.");
        if (!prenume) addError('prenume', "Te rugăm să completezi prenumele.");
        if (!telefon) addError('telefon', "Te rugăm să completezi numărul de telefon.");
        if (!dataNasterii) addError('data_nasterii', "Te rugăm să completezi data nașterii.");
        if (!email) addError('email', "Te rugăm să completezi adresa de email.");
        if (!motiv) addError('motiv', "Te rugăm să completezi motivul.");
    }

    // Verifică dacă numărul de telefon este valid
    const telefonRegex = /^\d{10}$/;
    if (!telefonRegex.test(telefon)) {
        valid = false;
        addError('telefon', "Numărul de telefon trebuie să conțină exact 10 cifre.");
    }

    // Verifică dacă email-ul este valid
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        valid = false;
        addError('email', "Te rugăm să introduci un email valid.");
    }

    if (valid) {
        alert("Formularul a fost trimis cu succes! Mulțumim pentru ajutor!");
    }

    return valid;
}

function openNav(){
    document.getElementById("MySidePanel").style.width="250px";
}

function closeNav(){
    document.getElementById("MySidePanel").style.width="0";
}


function addError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    field.insertAdjacentElement('afterend', errorMessage);
}

}
