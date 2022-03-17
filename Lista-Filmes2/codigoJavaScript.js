function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  if (filme.endsWith(".jpg")) {
    listarFilmesTela(filme);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesTela(filme) {
  var elementoFilme = "<img src=" + filme + ">";
  var listaFilme = document.getElementById("listaFilmes");
  listaFilme.innerHTML = listaFilme.innerHTML + elementoFilme;
}
