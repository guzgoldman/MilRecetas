document.getElementById('login-button').addEventListener('click', function (event) {
    var username = document.getElementById('username-input');
    var password = document.getElementById('password-input');
    var errorMessage = document.getElementById('error-message');

    errorMessage.textContent = "";

    if (username.value.trim().length < 8 || username.value.trim().length > 32 || password.value.trim().length < 8) {
        event.preventDefault();

        if (username.value.trim().length < 8 || username.value.trim().length > 32) {
            username.style.borderColor = "red";
            errorMessage.textContent = "El nombre de usuario es incorrecto o no ha sido ingresado.";
        } else {
            username.style.borderColor = "";
        }

        if (password.value.trim().length < 8) {
            password.style.borderColor = "red";
            errorMessage.textContent = "La contraseña es incorrecta o no ha sido ingresada.";
        } else {
            password.style.borderColor = "";
        }

        if ((username.value.trim().length < 8 || username.value.trim().length > 32) && password.value.trim().length < 8) {
            errorMessage.textContent = "El nombre de usuario y la contraseña son incorrectos o no han sido ingresados.";
        }
    }
});


document.querySelector("form").setAttribute("action", "");