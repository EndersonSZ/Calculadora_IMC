function calcularIMC() {

    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado").value;

    if(nome !== "" && peso!== "" && altura !== "" ){
        
    }


   

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso /(altura * altura);
    alert("seu IMC é:" +resultado);
    return true;
}