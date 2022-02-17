"use strict"

let datosCorrectos = false;

const limpiarFeedBack = (campo) => {

    setInterval(()=>{
        if (campo.classList.contains("is-invalid")) {
            campo.classList.remove("is-invalid");
        } else {
            campo.classList.remove("is-valid");
        }
    }, 3000)
}

const addFeedBack = (campo, isValid) => {
    if (isValid) {
        campo.classList.add("is-valid");
    } else {
        campo.classList.add("is-invalid");
    }
    limpiarFeedBack(campo);
    datosCorrectos = isValid;

}

let form = document.querySelector(".needs-validation");

form.addEventListener("submit", e => {
    e.preventDefault();

    let emailInput = document.querySelector("#input_correo");
    let termsCheck = document.querySelector("#check");
    let apellidoInput = document.querySelector("#input_ape");
    let nombreInput = document.querySelector("#input_name");
    let mensaje = document.querySelector("#mensaje");
    let emailRule = /.+@.+\..+/g;
    let nameRule = /\D+$/g;
    let nameRule2 = /\D+$/g;

    if (nameRule.test(nombreInput.value)) {
        addFeedBack(nombreInput, true);   
    } else {
        addFeedBack(nombreInput, false);
    }

    if (nameRule2.test(apellidoInput.value)) {
        addFeedBack(apellidoInput, true);   
    } else {
        addFeedBack(apellidoInput, false);
    }

    if (emailRule.test(emailInput.value)) {
        addFeedBack(emailInput, true);   
    } else {
        addFeedBack(emailInput, false);
    }

    if (!termsCheck.checked) {
        addFeedBack(termsCheck, false);
    }

    if ((mensaje.value.split(" ")).join("").length >= 5) {
        addFeedBack(mensaje, true);   
    } else {
        addFeedBack(mensaje, false);   
    }

    if (datosCorrectos) {
        form.submit();
    }
});