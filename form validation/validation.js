function validateForm() {
    document.getElementById("errorMessages").innerHTML = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var departureTime = document.getElementById("departureTime").value;
    var ticketCount = document.getElementById("ticketCount").value;

    if (name.trim() === "") {
        displayError("Nama tidak boleh kosong.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("Format email tidak valid.");
        return;
    }

    if (departureTime.trim() === "") {
        displayError("Waktu keberangkatan tidak boleh kosong.");
        return;
    }

    if (isNaN(ticketCount) || ticketCount <= 0 || !Number.isInteger(parseFloat(ticketCount))) {
        displayError("Jumlah tiket harus berupa angka bulat positif.");
        return;
    }

    displayFormData(name, email, departureTime, ticketCount);
}

function displayError(message) {
  
    var errorMessageDiv = document.getElementById("errorMessages");
    errorMessageDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}

function displayFormData(name, email, departureTime, ticketCount) {
  
    var formDataDiv = document.getElementById("formData");
    formDataDiv.innerHTML = `
        <h2>Data Formulir:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Waktu Keberangkatan:</strong> ${departureTime}</p>
        <p><strong>Jumlah Tiket:</strong> ${ticketCount}</p>
    `;
}
