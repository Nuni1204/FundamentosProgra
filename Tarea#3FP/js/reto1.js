document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, llena todos los campos!',
        });
        return;
    }

    if (username === "Cenfo" && password === "123") {
        window.location.href = "https://ucenfotec.ac.cr/";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los datos son incorrectos!',
        });
    }
});

Swal.fire({
    icon: 'info',
    title: '¡Hola!',
    text: 'Bienvenido al sistema',
}).then(() => {
    document.querySelector('.container').classList.add('container-centered');
});

Swal.getPopup().addEventListener('mouseout', () => {
    document.querySelector('.container').classList.remove('container-centered');
});
