var numSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numSecreto) {
    resultado.innerHTML = "Acertou";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Digite um número entre 0 e 10.";
  } else {
    if (chute > numSecreto) {
      resultado.innerHTML = "Errou! Número secreto é menor.";
    } else {
      resultado.innerHTML = "Errou! Número secreto é maior.";
    }
  }
}
