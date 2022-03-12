function Calcular() {
  var notaPBElemento = document.getElementById("notaPB");
  var notaPB = notaPBElemento.value;
  var notaPBConvertida = parseFloat(notaPB);

  var notaSBElemento = document.getElementById("notaSB");
  var notaSB = notaSBElemento.value;
  var notaSBConvertida = parseFloat(notaSB);

  var notaTBElemento = document.getElementById("notaTB");
  var notaTB = notaTBElemento.value;
  var notaTBConvertida = parseFloat(notaTB);

  var notaQBElemento = document.getElementById("notaQB");
  var notaQB = notaQBElemento.value;
  var notaQBConvertida = parseFloat(notaQB);

  var media =
    (notaPBConvertida +
      notaSBConvertida +
      notaTBConvertida +
      notaQBConvertida) /
    4;

  var elementValorConvertido = document.getElementById("media");
  var valorConvertido = "Sua média é: " + media;
  elementValorConvertido.innerHTML = valorConvertido;
}
