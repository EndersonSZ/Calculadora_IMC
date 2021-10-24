function calcularIMC() {
    if(document.getElementById("nome").value == ""){
        alert("Preencha seu nome");
    }

    if(document.getElementById("peso").value ==""){
        alert("preencha o peso");
    }
    if(document.getElementById("altura").value==""){
        alert("preencha o peso");
    }

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso /(altura * altura);
    alert("seu IMC é:" +resultado);
    return true;
}