var rafa = { nome: "Rafa", vitoria: 0, empate: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitoria: 0, empate: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitoria: 0, empate: 0, derrotas: 0, pontos: 0 };

var jogadores = [rafa, paulo, gui];

function calculaPontos(jogador) {
  var pontos = jogador.vitoria * 3 + jogador.empate;
  return pontos;
}

function jogadorTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitoria + "</td>";
    elemento += "<td>" + jogadores[i].empate + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

jogadorTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitoria++;
  jogador.pontos = calculaPontos(jogador);
  jogadorTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empate++;
  jogador.pontos = calculaPontos(jogador);
  jogadorTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos--;
  jogadorTela(jogadores);
}
