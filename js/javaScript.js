document.getElementById('boton-enviar').addEventListener('click', function (event) {
    var nombre = document.getElementById("name");
    var apellido = document.getElementById("lastname");
    var mail = document.getElementById("email");
    var celular = document.getElementById("phone");
    var mensaje = document.getElementById("message");
    var checkbox = document.getElementById("checkbox").checked;
    let regexEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    // busca numero
    let regexLetra=/\d/;
    // busca letra
    let regexNumero=/[a-zA-Z]/;

    event.preventDefault();

    if (nombre.value.trim() === "" || apellido.value.trim() === "" || mail.value.trim() === "" || celular.value.trim() === "" || mensaje.value.trim() === "") {

        alert("Debe completar todos los campos");
        return false;
        
    }
    if (!checkbox) {
        alert("Debes aceptar los términos y condiciones");
        return false;
    }
    if(!regexEmail.test(mail.value)){
        alert("El mail ingresado es incorrecto");
        return false;
    }
    if(regexLetra.test(nombre.value)||regexLetra.test(apellido.value)){
        alert("Los campos Nombre y Apellido no deben contener números")
        return false;
    }
    if(regexNumero.test(celular.value)){
        alert("El campo Celular no debe contener letras")
        return false;
    }

    alert("Formulario enviado correctamente");
    return true;

});
    
// var elemento=document.getElementById('boton-enviar');
// if(elemento){
//     elemento.addEventListener('click',function(){
//         console.log("elemento existe")
//     });
    
// }else{
//     console.log("no existe");
// }