const $botonInformacionUsuario = document.querySelector('#boton-informacion-usuario');

$botonInformacionUsuario.onclick = function capturarInformacionUsuario(){
    
    const nombreUsuario = document.querySelector('nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('segundo-nombre-usuario').value || '';
    const apellidoUsuario = document.querySelector('apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('edad-usuario').value);

    function darBienvenidaAlUsuario(nombreUsuario);
    function hacerVisibleCampoDeTexto();
   
}

function darBienvenidaAlUsuario(nombreUsuario){
    document.querySelector('h1').textContent = `Bienvenido ${nombreUsuario}!`;
}

function hacerVisibleCampoDeTexto(){
    document.querySelector('#campo-texto-informacion-usuario').className = '';
}

