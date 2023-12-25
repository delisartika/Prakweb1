function authenticate() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "delisartika" && password === "student-nf23") {
        window.location.href = "success.html";
    } else {
        alert("Login gagal");
    }
}
