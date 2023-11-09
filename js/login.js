const $ = (id) => document.getElementById(id);
const usuario = $('username');
const passwd = $('passwd');
const button = $('buttonSubmit');

const sendLogin = () => {

    $('error').classList.remove("active");
    alert(`Envia al back: {name: "${usuario.value}", passwd: "${passwd.value}"}`);
    // Simular operaciones en el backend

    // Se encarga el servidor
    if (usuario.value == 'Pablo' && passwd.value == 'GuapoQuienLoLea') {
        alert(`Respuesta del back: {auth: true, msg: null }`);
        // direccionar a la pagina main
        window.location.replace('./html/main.html');
    }
    else {
        alert(`Respuesta del back: {auth: false, msg: 'El usuario o el password no son correctos.' }`);
        $('error').innerHTML = 'El usuario o el password no son correctos.';
        $('error').classList.add("active")
    }

    // ====================================
    

}

const isValid = () => {
    if (usuario.value.length > 3 && passwd.value.length > 3) {
        return false;
    }
    else {
        return true;
    }
}

$('login').addEventListener('submit', (e) => {
    e.preventDefault();
})

usuario.addEventListener('blur', ({ target }) => {
    button.disabled = isValid();
})

passwd.addEventListener('blur', ({ target }) => {
    button.disabled = isValid();
})