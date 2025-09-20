// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    // Validar que el campo no esté vacío
    if (!nombreAmigo) {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        listaAmigos();
        return amigos;
    }
}

// Función para ctualizar la lista de amigos
function listaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // Recorrer el arreglo y agregar amigos
    for(let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.innerText = amigos[i];
        lista.appendChild(nuevoAmigo);
    }
}

// Función para obtener un amigo aleatorio
function sortearAmigo() {
    if (amigos == '') {
        alert('Por favor, inserte al menos un nombre');
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es ${amigoSecreto} 😯`;
    }
}