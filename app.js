//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];         
function adicionarAmigo() {
    let input = document.getElementById("nome-amigo");
    let nome = input.value.trim(); // tira espaços em branco

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // adiciona na lista
    input.value = ""; // limpa o campo

    mostrarLista(); // atualiza a lista na tela
}
function mostrarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = ""; // limpa antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo secreto sorteado: <strong>${nomeSorteado}</strong>`;
}
