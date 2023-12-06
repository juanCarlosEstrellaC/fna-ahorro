let nombreCorrecto = 'excadrill';
let intentos = 0;
let puntaje = 5;

function jugar(nombre) {
    intentos++;

    if (nombre === nombreCorrecto) {
        /*      document.getElementById('idPokeTapado').src = 'img/descubiertoExca.png' // Img referenciada*/
        document.getElementById('idPokeTapado').src = 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/0c/latest/20230701043851/Excadrill.png/200px-Excadrill.png'
        document.getElementById('idRespuesta').innerText = "Felicitaciones, has seleccionado la opción correcta."
        document.getElementById('idRespuesta').style.backgroundColor = "blue"; 
        document.getElementById('idRespuesta').style.borderBottom = "solid"; 
        document.getElementById('idRespuesta').style.fontFamily = "Times New Roman, Times, serif"; 

        switch (intentos) {
            case 1:
                document.getElementById('idPuntaje').innerText = puntaje;
                break;
            case 2:
                document.getElementById('idPuntaje').innerText = puntaje-2;
                break;
            case 3:
                document.getElementById('idPuntaje').innerText = puntaje-4;
                break;
        
            default:
                break;
        }
    }
    document.getElementById('idIntentos').innerText = intentos;
    document.getElementById('idRespuesta').innerText = "Pokémon incorrecto, intentalo nuevamente."

    if (intentos === 3 && nombre !== nombreCorrecto) {
        reiniciar()
    }
}

function reiniciar() {
    location.reload();
}