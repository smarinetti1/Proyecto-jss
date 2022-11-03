const usuarios = [{
nombre:"santino" ,
mail:"marinetti@123" ,
contraseña: "1234657" ,

},
{
    nombre:"gino" ,
    mail:"rodriguez@123" ,
    contraseña: "bocajuniors12" ,
    
    },
    {
        nombre:"pedro" ,
        mail:"rugeri@123" ,
        contraseña: "holahola12" ,
        
        },

]




const mailLog = document.getElementById("emailLogin"),
    password = document.getElementById("passwordLogin")
    recordar = document.getElementById("recordarme")
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');

    function validarUsuario(usersDB,user,pass){
        let encontrado = usersDB.find(usersDB=>usersDB.mail == user);

        if(typeof encontrado === "undefined"){
            return false;
        }
        else{
    if(encontrado.contraseña != pass){
        return false;
    }else{
        return encontrado;
    }
    }
}

function guardarDatos(usuarioDB,storage) {
    const usuario = {
        "name" : usuarioDB.nombre,
        "user" : usuarioDB.mail,
        "pass" : usuarioDB.contraseña
    }
        storage.setItem("usuario", JSON.stringify(usuario));
}

function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage){
    let usuarioStorage = JSON.parse(storage.getItem("usuario"));
    return usuarioStorage;
}

function usuarioLogueado(usuario){
    if(usuario) {
        saludar(usuario);
            presentarInfo(toggles, "d-none");
            
    }
}

function presentarInfo (array, clase){
    array.array.forEach(element => {
        element.classList.toggle(clase);
    });
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    let data = validarUsuario(usuarios, mailLog.value, password.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else { if (recordar.checked) {
            guardarDatos(data, localStorage);
            saludar(recuperarUsuario(localStorage));
        } else {
            guardarDatos(data, sessionStorage);
            saludar(recuperarUsuario(sessionStorage));
        }
    }

});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

window.onload = () => usuarioLogueado(recuperarUsuario(localStorage)); 
