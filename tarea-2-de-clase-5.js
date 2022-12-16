const $botonInformacionUsuario = document.querySelector('#boton-informacion-usuario');

$botonInformacionUsuario.onclick = function manejarInformacionUsuario(){
    
    const nombreUsuario = document.querySelector('.nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('.segundo-nombre-usuario').value || '';
    const apellidoUsuario = document.querySelector('.apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('.edad-usuario').value);

    darBienvenidaAlUsuario(nombreUsuario);
    hacerVisibleCampoDeTexto();
    completaCampoDeTexto(nombreUsuario, segundoNombreUsuario, apellidoUsuario, edadUsuario);
   
}

function darBienvenidaAlUsuario(nombreUsuario){
    document.querySelector('h1').textContent = `Bienvenido ${nombreUsuario}!`;
}

function hacerVisibleCampoDeTexto(){
    document.querySelector('#campo-texto-informacion-usuario').className = '';
}

function completaCampoDeTexto(nombreUsuario, segundoNombreUsuario, apellidoUsuario, edadUsuario){
    
    const textoInformacionDeUsuario = `Nombre de usuario: ${nombreUsuario}
    Segundo nombre: ${segundoNombreUsuario}
    Apellido: ${apellidoUsuario}
    Edad: ${edadUsuario}`;

    document.querySelector('#campo-texto-informacion-usuario').textContent = textoInformacionDeUsuario;
}
