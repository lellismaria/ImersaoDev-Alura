var elementoResultado = document.getElementById("resultado")

function validarCampos() {
  var notaDoPrimeiroBimestre = parseFloat(document.getElementById("notaPrimeiroBimestre").value);
  var notaDoSegundoBimestre = parseFloat(document.getElementById("notaSegundoBimestre").value);
  var notaDoTerceiroBimestre = parseFloat(document.getElementById("notaTerceiroBimestre").value);
  var notaDoQuartoBimestre = parseFloat(document.getElementById("notaQuartoBimestre").value);

  console.log(notaDoSegundoBimestre);
  
  if (isNaN(notaDoPrimeiroBimestre) && isNaN(notaDoSegundoBimestre) && isNaN(notaDoTerceiroBimestre) && isNaN(notaDoQuartoBimestre)) {
    elementoResultado.innerHTML = "<p>Favor preencher todos os campos!</p><br>";
  } else {
    calcularMedia(notaDoPrimeiroBimestre, notaDoSegundoBimestre, notaDoTerceiroBimestre, notaDoQuartoBimestre);
  }
}

function calcularMedia(notaPrimeiroBimestre,notaSegundoBimestre,notaTerceiroBimestre,notaQuartoBimestre) {
  var notaDoPrimeiroBimestre = notaPrimeiroBimestre;
  var notaDoSegundoBimestre = notaSegundoBimestre;
  var notaDoTerceiroBimestre = notaTerceiroBimestre;
  var notaDoQuartoBimestre = notaQuartoBimestre;

  var notaFixada = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1);

  mostraResultado(notaFixada);
  }

function mostraResultado(notaFixada) {
  var notaFinal = notaFixada

  if ( notaFinal >= 6) {
    elementoResultado.innerHTML = "<p>Você foi aprovado(a)!</p><br>";
  } else {
    elementoResultado.innerHTML = "<p>Você foi reprovado(a)!</p><br>";
  }
  elementoResultado.innerHTML += "<p>Sua nota final foi: " + notaFinal + "</p>";
}