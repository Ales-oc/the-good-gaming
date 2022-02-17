"use strict"

let registrado = false;

const registrarse = () => {
    let enlacePerfil = document.querySelector("#enlacePerfil");
    enlacePerfil.textContent = "Perfil";
    registrado = true;
}

const goContact = () => {
    if (!registrado) {
        let toast = document.querySelector(".toast");
        toast = bootstrap.Toast.getOrCreateInstance(toast)
        toast.show();
    } else {
        window.location = "contact.html";
    }
}

const showTab =  tabname => {
    var tab = document.querySelector(`#myTab button[data-bs-target="#${tabname}"]`);
    let dropBtn = document.querySelector("#dropdownMenuButton");
    dropBtn.textContent = tab.textContent;
    bootstrap.Tab.getOrCreateInstance(tab).show();
}


