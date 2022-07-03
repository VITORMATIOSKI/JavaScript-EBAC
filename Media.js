
function calculaMedia() {

    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);

    let mediaDosNumeros = (a + b + c) / 3;

    document.getElementById('resultado').innerHTML = "Resultado:" + mediaDosNumeros;
}




