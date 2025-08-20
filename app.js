// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Adiciona com o botão ou pressionando Enter
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('nomeAmigo');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') adicionarAmigo();
  });
});

function adicionarAmigo() {
  const input = document.getElementById("nomeAmigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Evita nomes duplicados (opcional, mas ajuda)
  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nome);
  input.value = "";
  input.focus();
  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];

  document.getElementById("resultadoSorteio").innerHTML =
    `<strong>${nomeSorteado}</strong> foi sorteado!`;
}
